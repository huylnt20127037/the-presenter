import { cloneElement } from "react";
import { Button } from "@chakra-ui/react";
import ButtonState from "../enums/button-state";
import ButtonFeeling from "../enums/button-feeling";
import { AppColor } from "../../theme";

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
  return (
    <Button
      justifyContent="start"
      leftIcon={icon}
      bgColor={AppColor.accent}
      color={AppColor.text}
      _hover={{ filter: "brightness(120%)" }}
      onClick={onClick}
    >
      {message}
    </Button>
  );
};

export default PrimaryButton;
