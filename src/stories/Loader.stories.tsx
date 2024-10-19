import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Bounce } from "../packages/index";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Loader/Bounce",
  component: Bounce,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Bounce>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithOverlay: Story = {
  args: {
    withOverlay: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <DotLottieReact
          src={"./particles2.lottie"}
          loop
          autoplay
          style={{ objectFit: "cover" }}
        />
        <Story />
      </div>
    ),
  ],
};

export const BounceElements: Story = {
  args: {
    bounceElements: 4,
  },
};
