import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import UI from "../extensions/ui";
import DateTimeExtension from "../extensions/date-time";
import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const KeyValueText = ({
  keyName,
  value,
  editComponentHandler,
  onEditButtonClicked,
  fontSize,
}) => {
  const { t } = useTranslation();
  const [isHovered, setHovered] = useState(false);

  const buildValue = (data) => {
    if (Number.isInteger(data)) {
      return UI.formatNumberWithDots(parseInt(data));
    }

    data = data?.toString() ?? "";
    if (DateTimeExtension.isIsoDate(data)) {
      return UI.beautifyDate(data);
    }
    if (data.includes("localization")) {
      data = data.replace("localization", "");
      return t(data);
    } else return data;
  };

  const buildButtons = () => {
    if (onEditButtonClicked) {
      // Check if onEditButtonClicked exists
      return (
        <HStack>
          <IconButton
            icon={<HiOutlinePencil />}
            boxSize="24px"
            backgroundColor="secondary"
            color="neutralGray"
            _hover={{ backgroundColor: "accent", color: "primary" }}
            onClick={onEditButtonClicked}
          />
        </HStack>
      );
    }
    return <HStack></HStack>;
  };

  return (
    <Flex
      justify="start"
      align="center"
      justifyContent={"space-between"}
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
    >
      {/* <Text
        whiteSpace="nowrap"
        color="neutralGray"
        fontWeight="bold"
        align="left"
      >
        {keyName}
      </Text> */}
      <Text color="text" fontSize={fontSize}>
        {buildValue(value)}
      </Text>
      {buildButtons()}
      {editComponentHandler && editComponentHandler}{" "}
      {/* Render editComponentHandler only if it exists */}
    </Flex>
  );
};

export default KeyValueText;
