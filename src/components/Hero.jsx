import React from 'react'
import hero from '../assets/images/restauranfood.jpg'
import { Button, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Grid className='hero' gridTemplateColumns="repeat(12, 1fr)" bg="#494949" pt={10} pb={10} gridTemplateRows="1fr" gap={10}>
      {/* <GridItem gridColumnStart="3" colSpan="8" gridTemplateColumns="repeat(8, 1fr)"> */}
        <GridItem colStart={3} colSpan={4} rowSpan={1}>
          <Grid gap={5} gridTemplateRows="ifr 1fr 1fr">
            <GridItem>
              <Heading as="h1" color="#F4CE14">Little Lemon</Heading>
              <Text as="p" fontSize="16pt" color="#EDEFEE">Chicago</Text>
            </GridItem>
            <GridItem>
              <Text fontSize="auto" color="#EDEFEE">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</Text>
            </GridItem>
            <GridItem>
              <Button colorScheme="orange" p={7}>Reserve a Table</Button>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={4} rowSpan={1}>
        {/* <img src={hero} style={{width: "100%", height:"25rem", borderRadius:"16px"}} alt="" /> */}
        <img src={hero} style={{ borderRadius:"16px" }} alt="" />
        </GridItem>
      {/* </GridItem> */}
    </Grid>
  )
}

export default Hero