import { forwardRef} from 'react'
import { type VariantProps } from "class-variance-authority"
import { sectionOverviewVariants } from '.'
import { useContent } from '@/hooks/use-content'

import { cn } from "@/lib/utils"
import { Link } from 'react-router-dom'

export interface SectionOverviewProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionOverviewVariants> {}

const SectionOverview = forwardRef<HTMLDivElement, SectionOverviewProps>(
  ({ className, ...props }, ref) => {

    const { project2025 } = useContent()

    console.log('here', project2025)

    return (
      <>
      {project2025.sections.map((section) => (
        <>
          <h3>
            {section.sectionIdx}. {section.emoji} <Link to={section.url}>{section.title}</Link>
          </h3>

          <p>{section.logline}</p>

          <ul>
            {section.chapters.map((chapter) => (
              <li>
                {chapter.emoji} <Link className='font-bold' to={chapter.url}>{chapter.chapterIdx}. {chapter.title}</Link>: {chapter.description}
              </li>
            ))}
          </ul>
        </>
      ))}
      </>
    )

    // return (
    //   <div
    //     className={cn(sectionOverviewVariants({ className }))}
    //     ref={ref}
    //     {...props}
    //   />
    // )
  }
)
SectionOverview.displayName = "SectionOverview"

export { SectionOverview }
