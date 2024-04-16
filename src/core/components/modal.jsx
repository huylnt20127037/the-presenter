import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AppColor } from "../../theme";

const AppModal = ({ headerText, body, footer, onClose, size }) => {
  return (
    <Modal isOpen={true} onClose={onClose} size={size ?? "xl"}>
      <ModalOverlay />
      <ModalContent bgColor={AppColor.primary} color={AppColor.text}>
        <ModalHeader>{headerText}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>

        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AppModal;
