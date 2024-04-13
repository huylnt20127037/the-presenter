import { Flex, Box } from "@chakra-ui/react";
import { useLayoutEffect, useRef } from "react";
import pixiApp from "./pixi";
import { AppColor } from "./theme";
import Sidebar from "./sidebar";
import PresentationScriptBox from "./presentation-script-box";

const App = () => {
  const rootRef = useRef();

  useLayoutEffect(() => {
    rootRef.current.appendChild(pixiApp.canvas);
  }, []);

  return (
    <Flex
      justify="space-between"
      align="center"
      bgColor={AppColor.accent}
      m={0}
      p={0}
      height="100vh"
    >
      <Sidebar />
      <Box ref={rootRef}></Box>
      <PresentationScriptBox />
    </Flex>
  );
};

export default App;
