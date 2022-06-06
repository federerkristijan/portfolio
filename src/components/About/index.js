import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faFigma, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
// import Ruby from '../../assets/images/ruby-on-rails.svg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
   setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)
}, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className='swashIn'>
            <p>
              I'm ambitious front-end developer looking for a role in
              established IT company, that would allow me to dive deeper into coding,
              embrace new creative challenges, and further develop my skills and learn new ones.
            </p>
            <br />
            <p>
              Digital native, cosmopolite and polyglot, with a 'Can-do' mindset and positive attitude, that would be a rejuvenating addition to your team!
            </p>
          </div>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faJsSquare} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faGitAlt} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faFigma} color='#EC4D28' />
            </div>
            {/* find out why it doesn't show. no FA icon for RoR */}
            {/* <div className='face7'>
              <img src='' color='#EFD81D' />
            </div> */}
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About
