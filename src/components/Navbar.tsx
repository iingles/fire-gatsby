import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Navbar
