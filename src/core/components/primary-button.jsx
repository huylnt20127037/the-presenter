import { cloneElement } from "react";
import { Button } from "@chakra-ui/react";
import ButtonState from "../enums/button-state";
import ButtonFeeling from "../enums/button-feeling";

const PrimaryButton = ({
  onClick,
  state,
  feeling,
  icon,
  message,
  width,
  margin,
  type,
}) => {
  const baseButton = (
    <Button
      variant="solid"
      leftIcon={icon}
      width={width}
      type={type}
      color="primary"
      margin={margin}
      border="1px solid transparent"
    >
      {message}
    </Button>
  );

  if (!state) state = ButtonState.DEFAULT;
  if (!feeling) feeling = ButtonFeeling.DEFAULT;

  let paintedButton;

  switch (feeling) {
    case ButtonFeeling.DEFAULT:
      paintedButton = cloneElement(baseButton, {
        backgroundColor: "accent",
      });
      break;
    case ButtonFeeling.WARNING:
      paintedButton = cloneElement(baseButton, {
        backgroundColor: "accentOrange",
      });
      break;
    case ButtonFeeling.DANGEROUS:
      paintedButton = cloneElement(baseButton, {
        backgroundColor: "accentRed",
      });
      break;
    case ButtonFeeling.DISABLED:
      paintedButton = cloneElement(baseButton, {
        color: "neutralGray",
        backgroundColor: "lightGray",
      });
      break;
  }

  switch (state) {
    case ButtonState.DEFAULT:
      return cloneElement(paintedButton, {
        onClick: onClick,
        _hover: { filter: "brightness(110%)" },
      });
    case ButtonState.LOADING:
      return cloneElement(paintedButton, {
        isLoading: true,
        _hover: {},
      });
    case ButtonState.DISABLED:
      return cloneElement(paintedButton, {
        _hover: { cursor: "no-drop" },
      });
  }
};

export default PrimaryButton;
