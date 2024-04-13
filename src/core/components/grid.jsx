
import { Grid, GridItem } from '@chakra-ui/react'

const AppGrid = ({numberOfColumns, items}) => {
     return <Grid templateColumns={`repeat(${numberOfColumns}, 1fr)`} gap='24px'>
          {items.map((item, index) => <GridItem key={index}>
               {item}
          </GridItem>)}
     </Grid>
}

export default AppGrid