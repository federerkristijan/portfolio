import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = (props) => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_92hpdem',
        form.current,
        '7wNWXf4jT4AUg4UJRbKyf'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Some text
          </p>
          <div className="contact-form">
            <form ref={form} on onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name='name' placeholder='name' required />
                </li>
                <li className='half'>
                  <input type="email" name='email' placeholder='email' required />
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required />
                </li>
                <li>
                  <textarea placeholder='message' name='message' required />
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
