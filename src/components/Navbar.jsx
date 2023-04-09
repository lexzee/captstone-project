import { HStack } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <HStack spacing={5} fontWeight="bold">
      <a href="./home">Home</a>
      <a href="./about">About</a>
      <a href="./menu">Menu</a>
      <a href="./reservation">Reservation</a>
      <a href="./order_online">Order Online</a>
      <a href="./login">Login</a>
    </HStack>
  )
}

export default Navbar