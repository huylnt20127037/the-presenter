import { Flex, Box } from "@chakra-ui/react";
import { useLayoutEffect, useRef } from "react";
import pixiApp from "../../../core/pixi";
import { AppColor } from "../../../theme";
import Sidebar from "./sidebar";
import PresentationScriptBox from "./presentation-script-box";
import usePixiStore from "../../../pixi-zustand";
import useStudioStore from "./studio-zustand";

const App = () => {
  const rootRef = useRef();
  const { thePresenter, bringThePresenterOntoStage } = usePixiStore();
  const { thePresenterClone } = useStudioStore();

  useLayoutEffect(() => {
    console.log(pixiApp.stage.children);
    if (thePresenterClone == undefined) {
      rootRef.current.appendChild(pixiApp.canvas);
    }
  }, [thePresenterClone]);

  useLayoutEffect(() => bringThePresenterOntoStage(), []);

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
