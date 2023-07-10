import { Box, Spacer,Flex, Heading, HStack, Button, Text } from '@chakra-ui/react'
import React from 'react'

function FlexLayout() {
  return (
    <Flex as='nav' p='10px' alignItems='center'>
      <Heading as='h1'>SDTREF</Heading>
      <Spacer />
      <HStack spacing='20px'>
        <Box bg='grey.200' p='10px'>M</Box>
        <Text>maheswarmahapatra0101gmail.com</Text>
        <Button colorScheme='purple'>LogOut</Button>
      </HStack>
    </Flex>

    // <Flex bg='grey.200' justify='space-between' wrap='wrap' gap='2'>
    //     <Box w='150px' h='50px' bg='red'>1</Box>
    //     <Box w='150px' h='50px' bg='green'>2</Box>
    //     <Box w='150px' h='50px' bg='yellow'>3</Box>
    //     <Box w='150px' h='50px' bg='blue'>4</Box>
    // </Flex>
  )
}

export default FlexLayout
