import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const mystyle = {
        color: "grey",
        textDecoration: "none",
        fontWeight: "400",
        fontSize: "15px"
      };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <p className="nav-link"><NavLink style={mystyle} to="/home">Home</NavLink></p>
                        </li>
                        <li className="nav-item">
                            <p href className="nav-link"><NavLink style={mystyle} to="/contactme">Contact</NavLink></p>
                        </li>
                    </ul>
                    <span className="navbar-text text-secondary">
                        <a target="_blank" href="https://www.linkedin.com/in/samkabir/"><i class="fab fa-linkedin me-3" style={{fontSize:'25px'}}></i></a>
                        <a target="_blank" href="https://github.com/samkabir"><i class="fab fa-github me-3" style={{fontSize:'25px'}}></i></a>
                        <a target="_blank" href="https://www.facebook.com/fahim.kabir.5/"><i class="fab fa-facebook-square me-3" style={{fontSize:'25px'}}></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/samkabir/"><i class="fab fa-twitter-square me-3" style={{fontSize:'25px'}}></i></a>
                    </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;