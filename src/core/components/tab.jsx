import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import UI from '../extensions/ui'

const AppTabs = ({ tabTitles, tabViews, defaultIndex, onTabIndexChange }) => {
     return <Tabs
          variant='soft-rounded'
          colorScheme='gray'
          defaultIndex={defaultIndex ?? 0} onChange={onTabIndexChange}
     >
          <TabList boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" width='fit-content' rounded='full'>
               {tabTitles.map((tabTitle, index) => <Tab key={index}>{tabTitle}</Tab>)}
          </TabList>

          {/* <TabIndicator
               mt="-1.5px"
               height="3px"
               bg="accent"
               borderRadius="1px"
          /> */}

          {UI.createVerticalSpace(18)}
          
          <TabPanels>
               {tabViews.map((tabView, index) => <TabPanel key={index} padding={0}>{tabView}</TabPanel>)}
          </TabPanels>
     </Tabs>
}

export default AppTabs