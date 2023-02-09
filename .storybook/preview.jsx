import React from "react";
import GlobalStyleWrapper from "../src/components/GlobalStyleWrapper";
import { GlobalStyle } from "./GloablStyle";
import { Theme } from "../src/theme/default.tsx";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <GlobalStyleWrapper theme={Theme} GlobalStyle={GlobalStyle}>
      <Story />
    </GlobalStyleWrapper>
  ),
];
