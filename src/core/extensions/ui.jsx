import { Box } from "@chakra-ui/react";

class UI {
     static createVerticalSpace = (space) => <Box height={`${space}px`}></Box>
     static createHorizontalSpace = (space) => <Box width={`${space}px`}></Box>
     static beautifyDate = (isoString) => {
          let date = new Date(isoString)
          let weekday = date.toLocaleString("vi-VN", { weekday: "long" })
          let day = date.getDate().toString().padStart(2, "0")
          let month = (date.getMonth() + 1).toString().padStart(2, "0")
          let year = date.getFullYear()

          return `${weekday}, ${day}/${month}/${year}`;
     }
     static formatNumberWithDots = (number) => {
          return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
     }
}

export default UI