import { useEffect, useState } from 'react'
import { useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
// eslint-disable-next-line
// import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_md6sl5x',
        'template_92hpdem',
        form.current,
        'PeMqd63ixaE07sXTX'
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
          If you have further questions, feel free to reach out and I would be grateful if you would offer me a chance to present myself and my life hacking skills in person.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className='info-map'>
          Kristijan Federer
          <br />
          Germany,
          <br />
          Saalestraße 39b 12055 <br />
          Berlin <br />
          <span>federer.kristijan@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[13.454975, 52.473267]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[13.454975, 52.473267]}>
              <Popup>Kiki lives here</Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact