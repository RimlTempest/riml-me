import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Deploy now",
    href: "#",
    variant: "primary",
    icon: {
      src: "/vercel.svg",
      alt: "Vercel logomark",
      width: 20,
      height: 20,
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Read our docs",
    href: "#",
    variant: "secondary",
  },
}; 