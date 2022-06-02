import './index.scss'
import LogoKF from '../../../assets/images/kf_logo.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoKF} alt="KF"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      />
    </div>
  )
}

export default Logo
