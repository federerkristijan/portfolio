import './index.scss'
import CV from '../../assets/images/KFCV.png'
import Loader from 'react-loaders'

const Portfolio = () => {
  return (
    <>
      <div className='cv-cont'>
        <img src={CV} alt="cv.png" />
        <a href="../../assets/images/CV.pdf" className='flat-button' download="Federer Kristijan CV">
          Download CV
        </a>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Portfolio
