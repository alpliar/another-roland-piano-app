import { extendTheme } from "@chakra-ui/react";
import { Inter, Righteous } from "next/font/google";

const body = Inter({ subsets: ["latin"] });
const heading = Righteous({ subsets: ["latin"], weight: "400" });

export const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  fonts: {
    body: body.style.fontFamily,
    heading: heading.style.fontFamily,
  },
});
