import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"

const AppDrawer = ({ headerText, drawerBody, drawerFooter, onClose, size }) => {
  return <Drawer isOpen={true} onClose={onClose} placement='right' size={size ?? 'md'}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader mr='18px'>{headerText}</DrawerHeader>

      <DrawerBody mx='24px' p='1px' pr='24px'>
        {drawerBody}
      </DrawerBody>

      <DrawerFooter>{drawerFooter}</DrawerFooter>
    </DrawerContent>
  </Drawer>
}

export default AppDrawer