import React from 'react'
import hero from '../assets/images/restauranfood.jpg'
import { Button, Grid, GridItem, Heading } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Grid className='hero' gridTemplateColumns="repeat(12, 1fr)" bg="#494949"  pr="15rem" pl="15rem">
      <GridItem gridColumnStart={3} colSpan={8} gridTemplateColumns="repeat(2, 1fr)">
        <GridItem>
          <div>
            <Heading as="h1" color="#F4CE14">Little Lemon</Heading>
            <p>Chicago</p>
          </div>
          <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
          <Button colorScheme="orange">Reserve a Table</Button>
        </GridItem>
        <GridItem>
        <img src={hero} style={{width: "22rem", height:"25rem", borderRadius:"16px"}} alt="" />
        </GridItem>
      </GridItem>
    </Grid>
  )
}

export default Hero