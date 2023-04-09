import { Flex } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Flex gap={5} fontWeight="bold" flexShrink="2" align="center">
      <a href="./home">Home</a>
      <a href="./about">About</a>
      <a href="./menu">Menu</a>
      <a href="./reservation">Reservation</a>
      <a href="./order_online">Order Online</a>
      <a href="./login">Login</a>
    </Flex>
  )
}

export default Navbar