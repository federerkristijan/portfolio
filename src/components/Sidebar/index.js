import { Link, NavLink } from 'react-router-dom'
import './index.scss'

import Logo from '../../assets/images/kf_logo.svg'
import Home from '../../assets/images/home-solid.svg'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt='logo' />
    </Link>
    <nav>
      <NavLink exact='true' activeclassname='active' to='/'>
        <i src={Home} color='#4d4d4e'></i> { /*icon={faHome} color='#4d4d4e' />  <FontAwesomeIcon icon="fas fa-home" />*/ }
      </NavLink>
    </nav>
  </div>
)
export default Sidebar
