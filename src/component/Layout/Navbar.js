import React from 'react'

function Navbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="">Admin user</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="/home">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link text-white" href="/about">About</a>
       
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/contact">Contact</a>
        </li> */}
        <li className='nav-item'>
        <a href ="/" className='btn btn-outline-light'>Add User</a>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-dark btn-outline-success text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
