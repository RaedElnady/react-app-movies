import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  
  render() {
    return (
      <>
      
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to='home'>Movies App <i className="fa-solid fa-video"></i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


        <li className="nav-item me-2">
          <Link className="nav-link active" to='home'>Home</Link>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link" to='upcoming'>Upcoming</Link>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link" to='toprated'>Top Rated</Link>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link" to='nowplaying'>Now Playing</Link>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link" to='trending'>Trending</Link>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link" to='popular'>Popular</Link>
        </li>

        <Link className="nav-link ms-5" to='search'>
        <i class="fa-solid fa-magnifying-glass text-white fs-3"> </i>

        </Link>
      </ul>
      
    </div>
  </div>
</nav>
</>
    )
  }
}
