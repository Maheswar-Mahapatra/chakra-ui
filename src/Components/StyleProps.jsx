import React from 'react'
import { Heading, Text, Box, Container } from '@chakra-ui/react'

function StyleProps() {
    const boxStyles={
        p:'10px',
        bg: "purple.500",
        color:'white',
        m: "10px",
        textAlign: "center",
        // filter: 'blur(2px)',
        ':hover':{
            color: 'black',
            bg: 'blue.200'
        }
    }
  return (
    <Container as='section' maxW='4xl' py='20px'>
      <Heading my='30px' p='10px'>Chakra UI Components</Heading>
      <Text ml='30px' color='blue.500' fontweight='30px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit at fuga accusamus enim nesciunt!</Text>
      <Box my='30px' p='20px' bg='orange'>
          <Text color='white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit at fuga accusamus enim nesciunt!</Text>
      </Box>
      <Box sx={boxStyles}>Hello Maheswar!</Box>
    </Container>
  )
}

export default StyleProps
