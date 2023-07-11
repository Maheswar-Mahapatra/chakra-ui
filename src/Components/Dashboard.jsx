import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'

function Dashboard() {
  return (
    <div>
      <SimpleGrid p={'10px'} spacing={10} minChildWidth={'250px'}>
        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>

        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>

        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
        <Box bg={'white'} h={'200px'} border={'1px solid'}></Box>
      </SimpleGrid>
    </div>
  )
}

export default Dashboard
