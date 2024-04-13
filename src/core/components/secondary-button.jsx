import { cloneElement } from "react";
import { Button } from "@chakra-ui/react";
import ButtonState from "../enums/button-state";
import ButtonFeeling from "../enums/button-feeling";
import { AppColor } from "../../theme";

const SecondaryButton = ({ onClick, feeling, state, icon, message }) => {
  let buttonProps = {
    variant: "outline",
    color: AppColor.text,
    backgroundColor: AppColor.secondary,
    leftIcon: icon,
    fontWeight: "bold",
    borderWidth: "1px",
    borderStyle: "solid",
  };
  const baseButton = <Button {...buttonProps}>{message}</Button>;

  if (!state) state = ButtonState.DEFAULT;
  if (!feeling) feeling = ButtonFeeling.DEFAULT;

  let paintedButton;

  switch (feeling) {
    case ButtonFeeling.DEFAULT:
      paintedButton = cloneElement(baseButton, {
        color: AppColor.primary,
        borderColor: AppColor.primary,
      });
      break;
    case ButtonFeeling.WARNING:
      paintedButton = cloneElement(baseButton, {
        color: AppColor.primary,
        borderColor: AppColor.primary,
      });
      break;
    case ButtonFeeling.DANGEROUS:
      paintedButton = cloneElement(baseButton, {
        color: AppColor.primary,
        borderColor: AppColor.primary,
      });
      break;
    case ButtonFeeling.DISABLED:
      paintedButton = cloneElement(baseButton, {
        color: AppColor.primary,
        backgroundColor: AppColor.primary,
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

export default SecondaryButton;
