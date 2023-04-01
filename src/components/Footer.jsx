import logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Little lemon's logo" />
      <aside>
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order online</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </aside>
      <aside>
        <h4>Contact Info</h4>
        <ul>
          <li><a href="">Address</a></li>
          <li><a href="">Phone Number</a></li>
          <li><a href="">Email</a></li>
        </ul>
      </aside>
      <aside>
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="">Facebook</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Twitter</a></li>
        </ul>
      </aside>
    </footer>
  )
}

export default Footer