import { HStack, Stack, Text, Image, Flex, Box } from "@chakra-ui/react";
import AppGrid from "../../../core/components/grid";
import CharacterBodyPart from "../data/character-body-part";
import { AppColor } from "../../../theme";
import * as PIXI from "pixi.js";
import { Stage } from "@pixi/react";
import AppContainer from "../../../core/components/container";
import { useEffect, useRef, useState } from "react";
import pixiApp from "../../../core/pixi";
import usePixiStore from "../../../pixi-zustand";
import useStudioStore from "./studio-zustand";
import ContainerState from "../../../core/enums/container-state";

const CustomizeCharacterAppearanceModal = () => {
  const pixiPreviewRef = useRef();
  const { thePresenter, bringThePresenterDownStage, updateThePresenter } =
    usePixiStore();
  const { cloneThePresenter, thePresenterClone, changeBodyPart } =
    useStudioStore();
  const [updateCount, setUpdateCount] = useState(0);

  const buildHairChoice = () => {
    return (
      <Stack>
        <Text>Chọn 1 kiểu tóc</Text>
        <AppGrid
          numberOfColumns={3}
          items={CharacterBodyPart.hair.map((e) => (
            <AppContainer
              state={
                e === thePresenterClone?.humanTextures.hair.imagePath
                  ? ContainerState.ACTIVE
                  : ContainerState.DEFAULT
              }
              onClick={() => {
                changeBodyPart("hair", e);
                setUpdateCount((updateCount) => updateCount + 1);
              }}
            >
              <Image src={e} boxSize="72px" />
            </AppContainer>
          ))}
        />
      </Stack>
    );
  };
  const buildNoseChoice = () => {
    return (
      <Stack>
        <Text>Chọn 1 kiểu mũi</Text>
        <AppGrid
          numberOfColumns={3}
          items={CharacterBodyPart.nose.map((e) => (
            <AppContainer
              state={
                e === thePresenterClone?.humanTextures.nose.imagePath
                  ? ContainerState.ACTIVE
                  : ContainerState.DEFAULT
              }
            >
              <Image src={e} boxSize="24px" />
            </AppContainer>
          ))}
        />
      </Stack>
    );
  };
  const buildChoices = () => {
    return (
      <Stack spacing="24px">
        {buildHairChoice()}
        {buildNoseChoice()}
      </Stack>
    );
  };
  const buildPreview = () => {
    return <Box ref={pixiPreviewRef}></Box>;
  };

  useEffect(() => {
    pixiPreviewRef.current.appendChild(pixiApp.canvas);
    bringThePresenterDownStage();
    cloneThePresenter(thePresenter);
  }, []);

  return (
    <Flex justify="center" gap="10%">
      {buildChoices()}
      {buildPreview()}
    </Flex>
  );
};

export default CustomizeCharacterAppearanceModal;
