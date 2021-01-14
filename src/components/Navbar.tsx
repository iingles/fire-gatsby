import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <header className="main-header">
            <div className="container">

                <div className="row">
                    <div className="col">
                        <Link className="site-title" to="/">
                          <h1>Isaac Ingles | Web Developer</h1> 
                        </Link>
                    </div>


                    <nav className="col col-2 main-nav">                            
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About</Link>
                    </nav>

                </div>

            </div> 
        </header>
    )
}

export default Navbar
