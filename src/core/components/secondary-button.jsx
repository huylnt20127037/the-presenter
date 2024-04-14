import { cloneElement } from "react";
import { Button } from "@chakra-ui/react";
import ButtonState from "../enums/button-state";
import ButtonFeeling from "../enums/button-feeling";
import { AppColor } from "../../theme";

const SecondaryButton = ({ onClick, feeling, state, icon, message }) => {
  return (
    <Button
      justifyContent="start"
      bgColor={AppColor.secondary}
      leftIcon={icon}
      color={AppColor.text}
      _hover={{ filter: "brightness(120%)" }}
      onClick={onClick}
    >
      {message}
    </Button>
  );
};

export default SecondaryButton;
