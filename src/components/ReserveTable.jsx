import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Grid, GridItem, Heading, Input, InputGroup, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Flex, VStack } from '@chakra-ui/react'

const ReserveTable = () => {
  const fieldset = {
    // border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
  }
  return (
    <>
      <Header />
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colStart={3} colSpan={8}>
          <form>
            <fieldset style={fieldset}>
              <Heading as="h1" alignSelf='center'>Reserve a Table</Heading>
              <label for='name'>Name:</label>
              <Input placeholder='Enter your full name' name="name" />
              <label for='date'>Date and Time:</label>
              <Input placeholder='Select Date and Time' type="datetime-local" />
              <VStack align="left" position="relative">
                <label for='noOfDiner'>Number of Diner</label>
                <NumberInput defaultValue={0} min={1} max={20} display="flex">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </VStack>
              <label for='occassion'>Select Occassion:</label>
              <Input placeholder='Enter your full name' name="occassion" />
              <label for='location'>Select Location:</label>
              <Input placeholder='Enter your full name' name="location" />
              <label for='comment'>Extra Details:</label>
              <textarea placeholder='Enter your full name' name="location" />
            </fieldset>
          </form>
        </GridItem>
      </Grid>
      <Footer />
    </>
  )
}

export default ReserveTable