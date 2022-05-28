import KikiPic from '../../assets/images/kiki_pic.jpg';
import './index.scss';

const Home = () => {

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>HI, <br /> I'm</h1>
        <img src={KikiPic} alt="developer" />
      </div>
    </div>
  )
}

export default Home;
