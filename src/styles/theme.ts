'use client';
import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: "dark",
  fonts: {
    heading: `'Space Grotesk', sans-serif !important`,
    body: `'Space Grotesk', sans-serif`
  },
  colors,
  semanticTokens: { colors }
});

export default theme;
