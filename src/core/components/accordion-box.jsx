import { Box, Divider, Flex, Stack } from "@chakra-ui/react"
import AppContainer from "./container"
import { useState } from "react"
import SecondaryButton from "./secondary-button"
import { useTranslation } from "react-i18next"
import UI from "../extensions/ui"

const AccordionBox = ({ shownContent, collapsableContent }) => {
  const [t, i18n] = useTranslation()
  const [isBoxExpanded, setBoxExpanded] = useState(false)

  return <AppContainer width='100%' backgroundColor='secondary'>
    <Flex justify='space-between'>
      {shownContent}
      <SecondaryButton message={isBoxExpanded ? t('collapse') : t('expand')} onClick={() => setBoxExpanded(!isBoxExpanded)} />
    </Flex>

    {isBoxExpanded && <Stack>
      {UI.createVerticalSpace(8)}
      <Divider orientation='horizontal' />
      
      {collapsableContent}
    </Stack>
    }
  </AppContainer>
}

export default AccordionBox