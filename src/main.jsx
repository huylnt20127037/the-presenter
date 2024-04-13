import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { baseTheme } from "./theme.js";
import App from "./App.jsx";
import pixiApp from "./pixi.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider
    theme={baseTheme}
    toastOptions={{
      defaultOptions: {
        colorScheme: "orange",
        variant: "subtle",
        duration: "3000",
        position: "bottom-right",
      },
    }}
  >
    <App />
  </ChakraProvider>
);
