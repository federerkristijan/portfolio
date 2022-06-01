import { Link } from 'react-router-dom'
import Pic from '../../assets/images/kiki_pic.jpg'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <img src={Pic} alt="profile_pic" />
      <div className="text-zone">
        <h1>
          Hi, I'm Kristijan
        </h1>
        <h2>
          Frontend Web developer with full-stack background
        </h2>
        <h3>RoR, JS, React.js, Stimulus.js, PostgreSQL, etc.</h3>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
