import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ActionMenu = ({ title, items }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="outline"
        colorScheme="blue"
      >
        {title}
      </MenuButton>

      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index} icon={item?.icon} onClick={item?.onClick}>
            {item?.text}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ActionMenu;
