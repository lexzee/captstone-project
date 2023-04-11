import { Flex, Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Grid as="footer" gridTemplateColumns="repeat(12, 1fr)" pt={10} pb={10} fontSize={'sm'} bg="#D9D9D9">
      <GridItem colStart={3} colSpan={8}>
        <Grid gap={10} templateColumns="repeat(4,1fr)">
          <GridItem position="relative">
            <img src={logo} alt="Little lemon's logo" style={{position: 'absolute', top: '40%', bottom: '40%'}}/>
          </GridItem>
          <GridItem>
            <Text fontWeight="extrabold">Doormat Navigation</Text>
            <Flex flexDir="column">
              <Link to="/">Home </Link>
              <Link to="/about">About</Link>
              <Link href="/menu">Menu</Link>
              <Link to="/reserve">Reservation</Link>
              <Link href="/order_online">Order Online</Link>
              <Link href="/login">Login</Link>
            </Flex>
          </GridItem>
          <GridItem>
            <Text fontWeight="extrabold">Contact Info</Text>
            <Flex flexDir="column">
              <a href="">Address</a>
              <a href="">Phone Number</a>
              <a href="">Email</a>
            </Flex>
          </GridItem>
          <GridItem>
            <Text fontWeight="extrabold">Social Media Links</Text>
            <Flex flexDir="column">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
            </Flex>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  )
}

export default Footer