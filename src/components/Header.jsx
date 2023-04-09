import Navbar from "./Navbar"
import logo from "../assets/Logo.svg"
import { Grid, GridItem, HStack, Spacer } from "@chakra-ui/react"

const Header = () => {

  return (
    <header>
      <Grid templateColumns="repeat(12, 1fr)" pt={5} pb={5}>
      <GridItem gridColumnStart={3} colSpan={8}>
        <HStack>
        <img src={logo} alt="" />
        <Spacer />
        <Navbar />
        </HStack>
      </GridItem>
      </Grid>
    </header>
  )
}

export default Header