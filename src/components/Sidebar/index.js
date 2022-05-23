import { Link, NavLink } from 'react-router-dom'
import './index.scss'
// replace the pic with yours!
//import Logo from '../../assets/images/kiki_pic.jpg'
//import LogoSubtitle from '../../assets/images/logo_sub.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faHome } from '@fortawesome/free-brands-svg-icons'
import Home from '../../assets/images/logo_sub.png'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      {/* replace the pic with yours! */}
      {/*<img src={Logo} alt='logo' />*/}
      { /*<img className='sub-logo' src={LogoSubtitle} alt='name' />*/}
    </Link>
    <nav>
      <NavLink exact='true' activeclassname='active' to='/'>
        <i src={Home} color='#4d4d4e'></i> { /*icon={faHome} color='#4d4d4e' />  <FontAwesomeIcon icon="fas fa-home" />*/ }
      </NavLink>
    </nav>
  </div>
)
export default Sidebar
