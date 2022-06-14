import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import Pic from '../../assets/images/kiki_pic.jpg'
import AnimatedLetters from '../../components/AnimatedLetters'
// hidding logo as I cannot manipulate it
// import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'K', 'r', 'i', 's', 't', 'i', 'j', 'a', 'n']
  // removing jobArray, so that animation and the code looks nicer
  // const jobArray = [
  //   'F',
  //   'r',
  //   'o',
  //   'n',
  //   't',
  //   'e',
  //   'n',
  //   'd',
  //   ' ',
  //   'w',
  //   'e',
  //   'b',
  //   ' ',
  //   'd',
  //   'e',
  //   'v',
  //   'e',
  //   'l',
  //   'o',
  //   'p',
  //   'e',
  //   'r',
  // ]

  useEffect(() => {
      // removed return and then it works, research more...useEffect does and doesn't want to return
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className='img'>
        <img src={Pic} alt="profile_pic" />
      </div>
      <div className="animated-title">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _12`}>,</span>
          <span className={`${letterClass} _12`}> </span>
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m </span>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <h2>
          {/* <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30} /> */}
          <span className={`${letterClass} _16`}>Frontend</span>
          <span className={`${letterClass} _17`}> </span>
          <span className={`${letterClass} _18`}>Web</span>
          <span className={`${letterClass} _19`}> </span>
          <span className={`${letterClass} _20`}>Developer</span>
          <span className={`${letterClass} _21`}> </span>
          <span className={`${letterClass} _22`}>with</span>
          <span className={`${letterClass} _23`}> </span>
          <span className={`${letterClass} _24`}>a</span>
          <span className={`${letterClass} _25`}> </span>
          <span className={`${letterClass} _26`}>fullstack</span>
          <span className={`${letterClass} _27`}> </span>
          <span className={`${letterClass} _28`}>background</span>
        </h2>
        <br />
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <h3 className='skills-animation'>
          <div className='white-text'>
            <span className={`${letterClass}`}>Ruby on Rails</span>
            <span className={`${letterClass} _27`}>   </span>
            <span className={`${letterClass} _28`}>Javascript</span>
            <span className={`${letterClass} _27`}>   </span>
            <span className={`${letterClass} _28`}>React.js</span>
            <span className={`${letterClass} _27`}>   </span>
            <span className={`${letterClass} _28`}>Stimulus.js</span>
            <span className={`${letterClass} _27`}>   </span>
          </div>
          <div className='red-text'>
            <span className={`${letterClass} _28`}>PostgreSQL</span>
            <span className={`${letterClass} _27`}>   </span>
            <span className={`${letterClass} _28`}>GitHub</span>
            <span className={`${letterClass} _27`}>   </span>
            <span className={`${letterClass} _28`}>Figma</span>
            <span className={`${letterClass} _27`}>   </span>
            <span className={`${letterClass} _28`}>Bootstrap</span>
            <span className={`${letterClass} _27`}>   </span>
            <span className={`${letterClass} _28`}>SASS</span>
          </div>
        </h3>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Home
