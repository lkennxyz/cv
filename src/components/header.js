import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ siteTitle, setDark, dark }) => (
  <header>
    <div className="header">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="toggle">
        <label className="" htmlFor="theme-toggle">
          <FontAwesomeIcon
            icon={faSun}
            />
        </label>
        <input id="theme-toggle" className="" type="checkbox" checked={dark} onChange={() => setDark(!dark)}/>
        <label className="" htmlFor="theme-toggle">
          <FontAwesomeIcon
            icon={faMoon}
            />
        </label>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
