import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { baseTheme } from "./theme.js";
import App from "./feature/studio/presentation/App.jsx";
import pixiApp from "./core/pixi/index.js";
import { Color } from "pixi.js";
import { AppColor } from "./theme.js";

await pixiApp.init({
  width: 540,
  height: 540,
  backgroundColor: new Color(AppColor.secondary).toArray(),
});

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
