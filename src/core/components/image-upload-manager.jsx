import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Center,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FaCircle, FaRegCircle } from "react-icons/fa6";
import { HiOutlineUpload, HiTrash } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiImageOff } from "react-icons/ci";

import ImageUploadManagerMode from "../enums/image-upload-manager-mode";
import ImageUploadQuantity from "../enums/image-upload-quantity";
import SecondaryButton from "./secondary-button";
import ButtonFeeling from "../enums/button-feeling";

const ImageUploadManager = ({
  dataArr,
  addGuide,
  width,
  height,
  addHandler,
  removeHandler,
  mode,
  quantity,
}) => {
  const { t } = useTranslation();

  const [currentShownImage, setCurrentShownImage] = useState(
    dataArr?.length - 1 >= 0 ? dataArr.length - 1 : 0
  );
  const [isUploadButtonShown, setUploadButtonShown] = useState(true);
  const [isDeleteButtonShown, setDeleteButtonShown] = useState(false);

  const buildUploadButton = () => {
    switch (quantity) {
      case ImageUploadQuantity.SINGLE:
        if (!dataArr || dataArr.length < 1) {
          return (
            <SecondaryButton
              message={addGuide}
              icon={<HiOutlineUpload />}
              onClick={() => document.getElementById("image-uploader").click()}
            />
          );
        } else return <></>;

      case ImageUploadQuantity.MULTIPLE:
        return (
          <SecondaryButton
            message={addGuide}
            icon={<HiOutlineUpload />}
            onClick={() => document.getElementById("image-uploader").click()}
          />
        );
    }
  };

  const buildDeleteButton = () => (
    <SecondaryButton
      feeling={ButtonFeeling.DANGEROUS}
      message={t("remove")}
      icon={<HiTrash />}
      onClick={() => {
        removeHandler(currentShownImage);
        setCurrentShownImage(
          currentShownImage - 1 >= 0 ? currentShownImage - 1 : 0
        );
      }}
    />
  );

  const buildUploadHiddenInput = () => (
    <Input
      id="image-uploader"
      type="file"
      hidden
      onChange={(event) => {
        const image = event.target.files[0];
        addHandler(image);
        setUploadButtonShown(false);
      }}
    />
  );

  const buildButtons = () => {
    if (dataArr?.length > 0 && isUploadButtonShown)
      return (
        <Flex
          width="100%"
          height="100%"
          justify="center"
          align="center"
          position="absolute"
          zIndex={3}
          backgroundColor="lightGray"
          rounded="12px"
          onMouseEnter={() => {
            setUploadButtonShown(true);
            setDeleteButtonShown(true);
          }}
          onMouseLeave={() => {
            setUploadButtonShown(false);
            setDeleteButtonShown(false);
          }}
        >
          <Stack>
            {isDeleteButtonShown && buildDeleteButton()}
            {isUploadButtonShown && buildUploadButton()}
            {isUploadButtonShown && buildUploadHiddenInput()}
          </Stack>
        </Flex>
      );
    else
      return (
        <>
          {isUploadButtonShown && buildUploadButton()}
          {isUploadButtonShown && buildUploadHiddenInput()}
        </>
      );
  };

  const buildArrows = () => {
    if (!dataArr || dataArr?.length == 0) return <></>;
    return (
      <Flex position="absolute" zIndex={2} justify="space-between" width="98%">
        <IconButton
          variant="outline"
          icon={<IoIosArrowBack />}
          border="none"
          color="primary"
          _hover={{ border: "2px solid white" }}
          isRound
          isDisabled={currentShownImage === 0}
          onClick={() => setCurrentShownImage(currentShownImage - 1)}
        />
        <IconButton
          variant="outline"
          icon={<IoIosArrowForward />}
          border="none"
          color="primary"
          _hover={{ border: "2px solid white" }}
          isRound
          isDisabled={currentShownImage === dataArr?.length - 1}
          onClick={() => setCurrentShownImage(currentShownImage + 1)}
        />
      </Flex>
    );
  };

  const buildCounter = () => {
    return (
      <Flex
        position="absolute"
        bottom="10px"
        right="2%"
        gap="8px"
        align="center"
      >
        {dataArr?.map((e, i) => {
          if (i === currentShownImage)
            return (
              <Icon key={i} as={FaCircle} color="primary" boxSize="12px" />
            );
          else
            return (
              <Icon key={i} as={FaRegCircle} color="primary" boxSize="8px" />
            );
        })}
      </Flex>
    );
  };

  const buildImageURL = () => {
    if (!dataArr || dataArr?.length === 0) return undefined;

    switch (mode) {
      case ImageUploadManagerMode.EDIT:
        return URL.createObjectURL(dataArr[currentShownImage]);
      case ImageUploadManagerMode.VIEW:
        return dataArr[currentShownImage];
    }
  };

  const buildOverlay = () => (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      background="rgba(0, 0, 0, 0.5)"
      backdropFilter="blur(1px)"
      rounded="8px"
    ></Box>
  );

  const buildCurrentShownImage = () => {
    if (
      mode === ImageUploadManagerMode.VIEW &&
      (!dataArr || dataArr.length === 0)
    )
      return (
        <Icon as={CiImageOff} boxSize="30%" color="neutralGray" zIndex={2} />
      );

    return (
      <Image
        key={currentShownImage}
        zIndex={2}
        src={buildImageURL()}
        maxWidth="75%"
        maxHeight="100%"
        onMouseEnter={() => {
          setUploadButtonShown(true);
          setDeleteButtonShown(true);
        }}
        onMouseLeave={() => {
          setUploadButtonShown(true);
          setDeleteButtonShown(true);
        }}
        rounded="lg"
      />
    );
  };

  return (
    <Flex
      justify="center"
      align="center"
      position="relative"
      backgroundColor="secondary"
      width={width ?? "100%"}
      height={height ?? "100%"}
      rounded="12px"
      backgroundImage={buildImageURL()}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      aspectRatio={16 / 9}
    >
      {buildOverlay()}

      {mode === ImageUploadManagerMode.EDIT && buildButtons()}

      {buildCurrentShownImage()}

      {quantity === ImageUploadQuantity.MULTIPLE && buildArrows()}

      {quantity === ImageUploadQuantity.MULTIPLE && buildCounter()}
    </Flex>
  );
};

export default ImageUploadManager;
