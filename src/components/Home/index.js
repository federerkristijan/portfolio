import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pic from '../../assets/images/kiki_pic.jpg'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'K', 'r', 'i', 's', 't', 'i', 'j', 'a', 'n']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
      // removed return and then it works, research more...useEffect does and doesn't want to return
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <img src={Pic} alt="profile_pic" />
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`} >i,</span> <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m </span>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <h2>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
          <span className={`${letterClass} _23`}> </span>
          <span className={`${letterClass} _24`}>with a</span>
          <span className={`${letterClass} _25`}> </span>
          <span className={`${letterClass} _26`}>fullstack</span>
          <span className={`${letterClass} _27`}> </span>
          <span className={`${letterClass} _28`}>background</span>

        </h2>
        <h3>Ruby on Rails, Javascript, React.js, Stimulus.js, PostgreSQL, GitHub, Figma, etc.</h3>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
