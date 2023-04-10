import React from 'react'
import img1 from '../assets/images/Mario_Adrian_A.jpg'
import img2 from '../assets/images/Mario_Adrian_b.jpg'
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <Grid id='about' className='about' templateColumns="repeat(12, 1fr)" pt={10} pb={10} h="25rem">
      <GridItem colStart={3} colSpan={8}>
        <Grid templateColumns="repeat(2, 1fr)" gap={5} position='relative'>
          <GridItem color="black" position="relative">
            <Grid align="left" rowGap='2rem' style={{position: 'absolute',top:'50%', bottom: '50%'}}>
            <GridItem>
              <Heading color="#F4CE14">Little Lemon</Heading>
              <Text>Chicago</Text>
            </GridItem>
            <GridItem>
              <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </GridItem>
            </Grid>
          </GridItem>
          <GridItem position="relative" height="20">
            <img src={img1} alt="" style={{width: '15rem',height: '15rem', position: 'absolute', top: '100%', left:'0', zIndex: '1', borderRadius:'16px'}}/>
            <img src={img2} alt="" style={{width: '15rem',height: '15rem', position: 'absolute', top: '0', right: '0', zIndex: '0', borderRadius:'16px'}}/>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  )
}

export default About