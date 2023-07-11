import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import FlexLayout from './FlexLayout'
import Dashboard from './Dashboard'

function GridLayout() {
  return (
    <Grid templateColumns={'repeat(6, 1fr)'} bg={'grey.100'}>
      <GridItem as={'aside'} colSpan={'1'} bg={'purple.300'} minHeight={'100vh'} p={'30px'}>
        <span>Sidebar</span>
      </GridItem>
      <GridItem as={'main'} colSpan={'5'} p={'50px'}>
        <FlexLayout/>
        <Dashboard />
      </GridItem>
    </Grid>
  )
}

export default GridLayout
