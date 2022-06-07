import './index.scss'
import CV from '../../assets/images/KFCV.png'
import CV_Pdf from '../../assets/images/CV.pdf' //radi ; ovo; bez ovoga nemres do PDF-a, ali to sma i napravio na pocetku. sada sam jos vise zbunjen

import Loader from 'react-loaders'

const Portfolio = () => {
  return (
    <>
      <div className='cv-cont'>
        <img src={CV} alt="cv" />
        <a href={CV_Pdf} className='flat-button' download="Federer Kristijan CV">
          Download CV
        </a>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Portfolio
