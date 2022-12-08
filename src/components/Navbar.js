import React from 'react'
// import { Link } from 'react-router-dom'
import About from './About'

export default function Navbar(props) {
  return (
    <div className="App">
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={<About/>}>{props.aboutus}</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      
      <div class={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
      <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.switchMode}/>
      </div>

      {/* <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Green</label>
<div class={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.switchGreenMode}/>
</div>
<label className="form-check-label" htmlfor="flexSwitchCheckDefault">Blue</label>
<div class={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.switchBlueMode}/>
</div> */}
    </div>
    
  </div>
</nav>
      </div>
  )
}
