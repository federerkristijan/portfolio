import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { text, title, cube } from './const.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="title">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={title}
              idx={15}
            />
          </h1>
        </div>
        <div className="swashIn">
            <h2>{text}</h2>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            {cube.map((face, index) => {
              return (
                <div className={`face${index + 1}`}>
                  <FontAwesomeIcon icon={face.icon} color={face.color} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
