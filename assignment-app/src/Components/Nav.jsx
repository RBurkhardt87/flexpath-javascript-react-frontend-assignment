import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">User Behavior Data</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" href="/search">Search</a>
                            </li>
                        </ul>
                    </div> 
            </div>          
        </nav>
    </div>
    
  )
}

export default Nav
