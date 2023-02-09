import React from "react";
import GlobalStyleWrapper from "../src/components/GlobalStyleWrapper";
import { GlobalStyle } from "./GloablStyle";
import Theme from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const decorator = (Story) => (
  <GlobalStyleWrapper theme={Theme} GlobalStyle={GlobalStyle}>
    <Story />
  </GlobalStyleWrapper>
);

export const decorators = [decorator];
