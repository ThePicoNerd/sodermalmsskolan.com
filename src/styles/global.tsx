import React, { FunctionComponent } from "react";
import {
  css, Global,
} from "@emotion/react";
import { fonts } from "./text";
import spacingVariables from "./spacing";
import darkTheme from "./themes/dark";
import baseTheme from "./themes/base";

export const globalStyles = css({
  "html, body": {
    margin: 0,
    padding: 0,
    fontFamily: fonts.sans,
    wordBreak: "break-word",
  },

  ":root": {
    ...spacingVariables,
  },

  "::selection": {
    background: "var(--color-highlight)",
    color: "#ffffff",
  },

  a: {
    color: "var(--color-highlight)",
    transition: "opacity 0.1s",

    "&:hover": {
      opacity: 0.7,
    },
  },
});

export const GlobalStyles: FunctionComponent = () => (
  <Global styles={[globalStyles, {
    ":root": {
      ...baseTheme,

      "@media (prefers-color-scheme: dark)": darkTheme,
    },
  }]}
  />
);
