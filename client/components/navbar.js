import React from 'react'
import {Route, Link ,Switch} from 'react-router-dom';

export default ()=>{
    return(
      <div>
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <Link to="/" className="navbar-brand">Home</Link>
                  </div>
                  <div >
                      <ul className="nav navbar-nav">
                          <Link to="/about" className="navbar-brand">About</Link>
                      </ul>
                      <ul className="nav navbar-nav">
                          <Link to="/timetracker" className="navbar-brand">TimeTracking</Link>
                      </ul>
                      <ul className="nav navbar-nav navbar-right">
                          <Link to="/signup" className="navbar-brand">Signup</Link>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>

    )

}