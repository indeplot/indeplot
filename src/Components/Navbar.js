import React from 'react'
import home from '../Assets/Images/home.svg';
import logo from '../Assets/Images/logo.svg';
export default function Navbar() {
  return (
    <nav  className="navbar navbar-expand-lg navbar-light bg-dark">
  <a  className="navbar-brand ml-5" href="/"><img  src={logo} alt="logo_icon"  style={{width: "60px"}}/></a>
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon"></span>
  </button>

  <div  className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul  className="navbar-nav m-auto">
      <li  className="nav-item active">
        <a  className="nav-link text-white text-uppercase ml-5"  href="/">Home&nbsp;<img src={home} alt="home" className=""  height={20}/><span  className="sr-only">(current)</span></a>
      </li>
      <li  className="nav-item">
        <a  className="nav-link text-white text-uppercase ml-5" href="/">NEWS</a>
      </li>
      <li  className="nav-item">
        <a  className="nav-link text-white text-uppercase ml-5" href="/">CONTACT us</a>
      </li>
    </ul>
    <form  className="form-inline my-2 my-lg-0">
      <input  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button  className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}
