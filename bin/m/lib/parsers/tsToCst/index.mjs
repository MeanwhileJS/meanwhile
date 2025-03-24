import ts from 'typescript';
import { join, basename } from 'path';
import { checkForImports } from './typescript.mjs';
import { isClassComponent, isFunctionComponent, parseFunctionComponent, extractDirectProps } from './react.mjs';

// Parser methods for different node types
const propsParser = {
  // Parse a string literal node
  StringLiteral(node) {
    return {
      type: 'string',
      value: node.text
    };
  },
  // Parse an interface declaration node
  InterfaceDeclaration(node) {
    // Extract direct members (ignoring inherited properties)
    return extractDirectProps(node);
  }
};

// Traverse the components file to extract information
export const traverseComponentsFile = ({ componentSourceFile, componentName, cst }) => {
  // Track interfaces by name for later use
  const interfacesMap = {};

  function traverseAST(node) {
    // Check for import statements in the node
    checkForImports(node, cst);

    // Capture function components
    if (isFunctionComponent(node)) {
      const functionName = node.name?.text || node.parent?.name?.text;
      if (functionName) {
        console.log("Found Function Component:", functionName);
        parseFunctionComponent(node, cst);
      }
    }

    // Capture class components
    if (isClassComponent(node)) {
      const className = node.name?.text;
      if (className) {
        console.log("Found Class Component:", className);
      }
    }

    // Parse the node based on its type using the propsParser object
    const propsByType = Object.fromEntries(Object.entries(ts.SyntaxKind).map(([name]) => {
      const isMethod = `is${name}`;
      const parserMethod = `${name}`;
      // Check if the node matches the syntax kind and if a parser method exists
      if (ts[isMethod] && ts[isMethod](node) && propsParser[parserMethod]) {
        return [name, propsParser[parserMethod](node)];
      }
      return [name, false];
    }).filter(([_, b]) => !!b));

    // If the node is an InterfaceDeclaration, extract props and store in interfacesMap
    if (propsByType['InterfaceDeclaration']) {
      const props = propsByType['InterfaceDeclaration'];
      const interfaceName = node.name?.text;
      if (interfaceName) {
        interfacesMap[interfaceName] = props;
      }
    }

    // Capture export statements
    if (ts.isExportAssignment(node)) {
      // Default export
      if (!cst.exports._default) {
        cst.exports._default = {
          name: componentName,
          interface: null  // Placeholder, will link appropriate interface later
        };
      }

      console.log(node)
    } 
    else if (ts.isExportDeclaration(node)) {
      // Named exports
      if (!cst.exports.named) {
        cst.exports.named = [];
      }
      console.log(node) 
      if (node.exportClause && ts.isNamedExports(node.exportClause)) {
        node.exportClause.elements.forEach((element) => {
          if (element.name) {
            console.log("Named Export:", element.name.escapedText);
            cst.exports.named.push({
              name: element.name.escapedText,
              type: 'interface',  // Placeholder type (update based on actual type)
            });
          }
        });
      } else if (node.moduleSpecifier) {
        // Handle `export * from 'module'` or similar cases
        cst.exports.named.push({
          name: '*',
          type: 'module',
          module: node.moduleSpecifier.text
        });
      }
    } else if (ts.isVariableStatement(node)) {
      // Capture named exported constants or functions
      const isExported = node.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.ExportKeyword);
      if (isExported) {
        node.declarationList.declarations.forEach((declaration) => {
          if (declaration.name && ts.isIdentifier(declaration.name)) {
            if (!cst.exports.named) {
              cst.exports.named = [];
            }
            cst.exports.named.push({
              name: declaration.name.escapedText,
              type: 'const',
            });
          }
        });
      }
    } else if (ts.isFunctionDeclaration(node)) {
      // Capture named exported functions
      const isExported = node.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.ExportKeyword);
      if (isExported && node.name) {
        if (!cst.exports.named) {
          cst.exports.named = [];
        }
        cst.exports.named.push({
          name: node.name.escapedText,
          type: 'function',
        });
      }
    } 

    // Recursively traverse child nodes
    ts.forEachChild(node, traverseAST);
  }
  
  // Start traversing the AST from the root node
  traverseAST(componentSourceFile);

  // After traversal, link interfaces to their respective exports
  if (cst.exports._default) {
    const interfaceName = `${componentName}Props`;
    if (interfacesMap[interfaceName]) {
      cst.exports._default.interface = interfaceName;
    }
  }
  if (cst.exports.named) {
    cst.exports.named.forEach((namedExport) => {
      const interfaceName = `${namedExport.name}Props`;
      if (interfacesMap[interfaceName]) {
        namedExport.interface = interfaceName;
      }
    });
  }

  return cst;
};

// Generate CST from a TypeScript/TSX file
export async function generateCstFromTsx(componentFolderPath) {
  const componentsFilePath = join(componentFolderPath, 'component.tsx');
  const variantsFilePath = join(componentFolderPath, 'variants.tsx');
  const componentName = basename(componentFolderPath);
  const program = ts.createProgram([componentsFilePath, variantsFilePath], {});

  // Get the source file for the component
  const componentSourceFile = program.getSourceFile(componentsFilePath);

  if (!componentSourceFile) {
    throw new Error("One of the source files was not found.", { componentSourceFile });
  }
  // Adjusted structure: components with individual props and variants per component
  const cst = {
    imports: {},  // Imports at root level
    exports: {},  // Exports at root level
    components: {} // Top-level object for components
  };

  // Start the traversal for both files
  traverseComponentsFile({ componentSourceFile, componentName, cst });

  return cst;
}
