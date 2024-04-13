import { Select, Stack, Text } from "@chakra-ui/react"
import { forwardRef } from "react"

const Dropdown = forwardRef(({ label, icon, placeholder, options }, ref) => {

     const buildOption = (option) => {
          return <option value={option.key}>{option.value}</option>
     }
     return <Stack minWidth='250px'>
          <Text color='neutralGray' fontSize='sm'>{label}</Text>
          <Select ref={ref} icon={icon} placeholder={placeholder} borderColor='neutralGray'>
               {options.map((option, index) => buildOption(option))}
          </Select>
     </Stack>
})

export default Dropdown