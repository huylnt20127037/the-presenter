import { forwardRef } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
} from "@chakra-ui/react";
import InputState from "../enums/input-state";
import { AppColor } from "../../theme";
import SecondaryButton from "./secondary-button";
import { HiUpload } from "react-icons/hi";

const FormInput = forwardRef(
  (
    {
      label,
      icon,
      type,
      placeholder,
      defaultValue,
      value,
      isReadOnly,
      onChange,
      onInput,
      state,
      errorMessage,
      width,
      autoFocus,
      pattern,
    },
    ref
  ) => {
    if (!state) state = InputState.DEFAULT;

    if (type == "file")
      return (
        <Stack>
          <SecondaryButton
            icon={<HiUpload />}
            message="Tải file với định dạng .txt từ máy tính"
            onClick={() => document.getElementById("image-uploader").click()}
          />
          <Input id="image-uploader" type="file" hidden onChange={onChange} />
        </Stack>
      );

    return (
      <FormControl
        isInvalid={state === InputState.ERROR}
        isDisabled={state === InputState.DISABLED}
      >
        {label && (
          <FormLabel color={AppColor.text} fontWeight="normal">
            {label}
          </FormLabel>
        )}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={icon} />
          </InputLeftElement>
          <Input
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onInput={onInput}
            borderColor="neutralGray"
            focusBorderColor={AppColor.text}
            _hover={{}}
            isReadOnly={isReadOnly}
            width={width ?? "auto"}
            autoFocus={autoFocus}
            pattern={pattern}
          />
        </InputGroup>
        <FormErrorMessage color={AppColor.primary}>
          {errorMessage}
        </FormErrorMessage>
      </FormControl>
    );
  }
);

export default FormInput;
