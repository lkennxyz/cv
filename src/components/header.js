import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, setDark, dark }) => (
  <header>
    <div className="header">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="toggle">
        <input id="theme-toggle" className="toggle-checkbox" type="checkbox" checked={dark} onChange={() => setDark(!dark)}/>
        <label className="toggle-label" htmlFor="theme-toggle">
          <span 
            className="toggle-inner"
            sm-on=" "
            sm-off=" "
            lg-on="Dark"
            lg-off="Light"
          >
           </span>
          <span className="toggle-switch"></span>
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
