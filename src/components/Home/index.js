import { useState } from 'react'
import { Link } from 'react-router-dom'
import Pic from '../../assets/images/kiki_pic.jpg'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['K', 'r', 'i', 's', 't', 'i', 'j', 'a', 'n']
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
    ' ',
    'w',
    'i',
    't',
    'h',
    ' ',
    'a',
    ' ',
    'f',
    'u',
    'l',
    'l',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'b',
    'a',
    'c',
    'k',
    'g',
    'r',
    'o',
    'u',
    'n',
    'd',
  ]

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
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
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
