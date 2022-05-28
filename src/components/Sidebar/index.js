import { Link, NavLink } from 'react-router-dom'
import './index.scss'

import Logo from '../../assets/images/kf_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
//import Home from '../../assets/images/home-solid.svg'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img className="img" src={Logo} alt="logo" />
    </Link>
    <nav>
      <NavLink
        exact="true"
        className="home-link"
        activeclassname="active"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        className="about-link"
        activeclassname="active"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        className="contact-link"
        activeclassname="active"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <ul>
        <li>
          <a
            className="Link"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kristijan-federer/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
          <a
            className="Git"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/federerkristijan/"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
)
export default Sidebar
