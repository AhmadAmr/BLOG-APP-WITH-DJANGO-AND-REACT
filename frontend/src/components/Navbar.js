import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <Link className="navbar-brand" to='/'>Blogy</Link>
    //     <button 
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //     >
    //         <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav">
    //             <li className="nav-item active">
    //                 <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
    //             </li>
    //             <li className="nav-item">
    //                 <NavLink className="nav-link" exact to='/blog'>Blog</NavLink>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
    <Link className="navbar-brand" to='/'>Blogy</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
         <li className="nav-item active">
                <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
           </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to='/blog'>Blog</NavLink>
            </li>
            
            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
        </ul>
    </div>
</div>
</nav>

);

export default Navbar;