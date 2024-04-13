import { Flex, Text } from "@chakra-ui/react";
import { useLayoutEffect, useRef } from "react";
import pixiApp from "./pixi";

const App = () => {
  const rootRef = useRef();

  useLayoutEffect(() => {
    rootRef.current.appendChild(pixiApp.canvas);
  }, []);
  return (
    <Flex ref={rootRef} justify="space-between">
      <Text>Hello</Text>
    </Flex>
  );
};

export default App;
