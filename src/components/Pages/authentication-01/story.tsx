import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm1 } from '.';

const meta: Meta<typeof LoginForm1> = {
  component: LoginForm1,
  title: "Components/Pages/authentication-01"
};

export default meta;
type Story = StoryObj<typeof LoginForm1>;

export const Default: Story = {};