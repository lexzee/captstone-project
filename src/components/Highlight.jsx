import { Button, Card, Flex, Grid, GridItem, HStack, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

const Highlight = () => {
  return (
    <Grid gridTemplateColumns="repeat(12, 1fr)" pt={10} pb={10}>
      <GridItem gridColumnStart={3} colSpan={8}>
        <HStack>
          <Heading as="h2" fontSize="16pt">This Weeks's Special</Heading>
          <Spacer />
          <Button colorScheme='orange' p={6} fontSize="1.2rem">Online Menu</Button>
        </HStack>
        <Flex justify="space-between" pt={5}>
          <Card>some card</Card>
          <Card>some card</Card>
          <Card>some card</Card>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Highlight