import './index.scss'
import Scoobie from '../../assets/images/scooby_app.mov'

const Projects = props => {

  return (
    <div className='projects-cont'>
      <div>
        <video controls='controls' width='500' height='300' className='scoobie'>
          <source src={Scoobie} />
        </video>
      </div>
    </div>
  )
}

export default Projects
