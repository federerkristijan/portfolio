import { Link } from 'react-router-dom';
import Pic from '../../assets/images/kiki_pic.jpg';
import './index.scss';

const Home = () => {

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hi, <br /> I'm Kristijan
        <img src={Pic} alt="profile_pic" />
        <br />
        Web developer
        </h1>
        <h2>Frontend developer</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home;
