import Navbar from "./Navbar"
import logo from "../assets/Logo.svg"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
        <Navbar />
    </header>
  )
}

export default Header