import { useTranslation } from "react-i18next"
import { Card, CardHeader, CardBody, CardFooter, Stack } from '@chakra-ui/react'

const AppCard = ({imageSrc, header, body, footer}) => {
     const { t } = useTranslation()
     
     const buildText = (data) => {
          data = data.toString()
          if (data.includes('localization')) {
               data = data.replace('localization', '')
               return t(data)
          }
          else return data
     }

     return <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='elevated'
          borderLeft='2px solid'
          borderBottom='3px solid'
          borderColor='accent'
          _hover={{'boxShadow': '1px 3px 6px 3px rgba(43,108,176,0.25)', 'cursor': 'pointer'}}
     >
          {imageSrc && <Image
               objectFit='cover'
               maxW={{ base: '100%', sm: '200px' }}
               src={imageSrc}
          />}

          <Stack>
               <CardHeader fontWeight='bold' fontSize='lg'>
                    {header}
               </CardHeader>
               <CardBody>
                    {body}
               </CardBody>

               <CardFooter>
                    {footer}
               </CardFooter>
          </Stack>
     </Card>
}

export default AppCard