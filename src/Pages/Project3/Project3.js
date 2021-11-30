import React from 'react';
import img1 from '../../Images/optima1.png';
import img2 from '../../Images/optima2.png';
import img3 from '../../Images/optima3.png';

const Project3 = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 my-auto">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={img2}  className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={img3}  className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <h3>Optima Diagonostic Limited</h3>
                    <ul>
                        <li>This Website has 6 Routes, 1 home, 2 private, 1 login, 1 detail(for each service) and 1 404 page.</li>
                        <li>About and Appointment Routes are Private.</li>
                        <li>The Website has Home, About, Appointment, Login and Details of the services pages.</li>
                        <li>The website has two login system, one Google SignIn and a Email and Password SignIn.</li>
                        <li>In the services Section in the home page, I have fetched 6 data which shows various services.</li>
                        <li>The About page is about the goals and objective of the diagonstic Center.</li>
                        <li>This Website also has a Signup method in the login page.</li>
                     </ul>
                    <a target="_blank" rel="noreferrer" href="https://assignment10-doctors-react.web.app/" className="btn btn-secondary me-3">Live Website </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-samkabir" className="btn btn-secondary me-3">Github Code</a>
                </div>
            </div>
        </div>
    );
};

export default Project3;