import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react"

import { IoIosArrowForward } from "react-icons/io"

import UI from "../extensions/ui"

const StageBox = ({ stages, current }) => {
     const buildStage = (title, index) => {
          const buildMain = () => {
               if (index === current) {
                    return <>
                         <Flex justify='center' align='center' rounded='full' backgroundColor='accent' color='primary' boxSize='30px'>
                              {index + 1}
                         </Flex>
                         {UI.createHorizontalSpace(8)}
                         <Text fontWeight='bold' color='accent'>{title}</Text>
                    </>
               }
               else if (index > current) {
                    return <>
                         <Flex justify='center' align='center' rounded='full' backgroundColor='primary' color='neutralGray' border='1px solid' borderColor='accent' boxSize='30px'>
                              {index + 1}
                         </Flex>
                         {UI.createHorizontalSpace(8)}
                         <Text color='neutralGray'>{title}</Text>
                    </>
               }
               else {
                    return <>
                         <Flex justify='center' align='center' rounded='full' backgroundColor='accentGreen' color='primary' border='1px solid' borderColor='accent' boxSize='30px'>
                              {index + 1}
                         </Flex>
                         {UI.createHorizontalSpace(8)}
                         <Text color='accentGreen' fontWeight='bold'>{title}</Text>
                    </>
               }
          }
          const buildArrow = () => {
               if (index < stages.length - 1) {
                    return <Icon as={IoIosArrowForward} color='neutralGray' marginX='8px' boxSize='24px' />
               }
               else {
                    return <></>
               }
          }
          return <Flex align='center'>
               {buildMain()}
               {buildArrow()}
          </Flex>

     }

     return <Flex align='center' flexWrap='wrap' rowGap='12px'>
          {stages.map((stage, index) => buildStage(
               stage,
               index,
          ))}
     </Flex>
}

export default StageBox