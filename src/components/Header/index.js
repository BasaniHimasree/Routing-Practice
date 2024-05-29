import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <div className="header-card">
      <div className="image-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-image"
        />
        <h1 className="heading">Wave</h1>
      </div>
      <ul className="components-card">
        <li className="item">
          <Link className="heading" to="/">
            Home
          </Link>
        </li >

        <li className="item">
          <Link className="heading" to="/about">
            About
          </Link>
        </li >
        <li className="item">
          <Link className="heading" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
