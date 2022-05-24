import { Link, NavLink } from 'react-router-dom'
import './index.scss'

import Logo from '../../assets/images/kf_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
//import Home from '../../assets/images/home-solid.svg'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" width= "64" margin= "8 8" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
      </NavLink>
      <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
      </NavLink>
      <NavLink exact="true" className="contact-link" activeclassname="active" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
      </NavLink>
    </nav>
  </div>
)
export default Sidebar
