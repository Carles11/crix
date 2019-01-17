import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav> 
            <Link to="/">HOME</Link> 
            <Link to="/products">PRODUCTS</Link> 
        </nav>
    )
}

export default Navigation;