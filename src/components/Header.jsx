import Navbar from "./Navbar"
import logo from "../assets/Logo.svg"
import { Flex, Spacer } from "@chakra-ui/react"

const Header = () => {
  return (
    <header>
      <Flex as="nav" autoFlow="column" alignItems="center" pt={6} pb={6}>
        <img src={logo} alt="" />
        <Spacer />
        <Navbar />
      </Flex>
    </header>
  )
}

export default Header