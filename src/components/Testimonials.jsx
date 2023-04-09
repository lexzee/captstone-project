import { Card, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'

const Testimonials = () => {
  return (
    <Grid className='testimonials' templateColumns="repeat(12, 1fr)" pt={10} pb={10}  bg="#BEBEBE">
      <GridItem colStart={3} colSpan={8}>
        <Flex flexDir='column'>
          <Heading as="h3" fontSize="16pt" alignSelf="center" mb={7}>Testimonials</Heading>
          <Flex justify='space-between'>
            <Card>card 1</Card>
            <Card>card 2</Card>
            <Card>card 3</Card>
            <Card>card 4</Card>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Testimonials