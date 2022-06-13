import './index.scss'
import Scoobie from '../../assets/images/scooby_app.mov'

const Projects = props => {

  return (
    <div className='container projects-page'>
      <div>
        <video controls='controls' className='scoobie'>
          <source src={Scoobie} />
        </video>
      </div>
    </div>
  )
}

export default Projects
