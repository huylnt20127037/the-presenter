import { Flex, Box, Icon } from "@chakra-ui/react";
import ContainerState from "../enums/container-state";
import { AppColor } from "../../theme";

const AppContainer = ({
  icon,
  children,
  width,
  height,
  margin,
  backgroundColor,
  backgroundImage,
  hoverStyle,
  onClick,
  overflow,
  state,
}) => {
  if (onClick && !hoverStyle) hoverStyle = { cursor: "pointer" };

  const setBorderColor = () => {
    if (!state) state = ContainerState.DEFAULT;
    switch (state) {
      case ContainerState.DEFAULT:
        return "transparent";
      case ContainerState.ACTIVE:
        return "accent";
    }
  };

  return (
    <Flex
      width={width}
      height={height}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 5px"
      paddingX="18px"
      paddingY="8px"
      gap="12px"
      align="center"
      m={margin}
      rounded="xl"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundColor={backgroundColor || AppColor.text}
      backgroundImage={`url(${backgroundImage})`}
      _hover={hoverStyle}
      onClick={onClick}
      overflow={overflow}
      borderWidth="2px"
      borderStyle="solid"
      borderColor={setBorderColor()}
    >
      {icon && <Icon as={icon} />}
      <Box>{children}</Box>
    </Flex>
  );
};

export default AppContainer;
