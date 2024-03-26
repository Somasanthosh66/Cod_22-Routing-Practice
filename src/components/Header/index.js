// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="wave-image"
      />
      <hi className="wave-name">Wave</hi>
    </div>
    <ul className="nav-menu">
      <li className="nav-link">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-link">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-link">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
