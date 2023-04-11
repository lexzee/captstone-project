import { Flex, Link } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Flex as="nav" gap={5} fontWeight="bold" flexShrink="2" align="center">
      <Link href="/">Home </Link>
      <Link href="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link href="/reserve">Reservation</Link>
      <Link to="/order_online">Order Online</Link>
      <Link to="/login">Login</Link>
    </Flex>
  )
}

export default Navbar