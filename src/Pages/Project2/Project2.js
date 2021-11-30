import React from 'react';
import img1 from '../../Images/evanto1.png';
import img2 from '../../Images/evanto2.png';
import img3 from '../../Images/evanto3.png';

const Project2 = () => {
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
                    <h3>Evanto Tourism Limited</h3>
                    <ul>
                        <li>This Website has 7 Routes, 1 home, 3 private, 1 login, 1 detail(for each service) and 1 404 page.</li>
                        <li>My Bookings, Manage All Bookings and Add a Tour Plan Routes are Private.</li>
                        <li>The Website has Home, My Bookings, Manage All Bookings, Add a Tour Plan, Login and Details of the services pages.</li>
                        <li>The website has one login system - Google SignIn.</li>
                        <li>In the Tour Packages Section in the home page, I have fetched 6 data which shows various Tour plans.</li>
                        <li>Each Book Now page redirects to a booking page, which has a detailed info about the booking and a form for booking.</li>
                       </ul>
                    <a target="_blank" rel="noreferrer" href="https://assignment11-tourism-react.web.app/" className="btn btn-secondary me-3">Live Website </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-samkabir" className="btn btn-secondary me-3">Github Client </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-server-side-samkabir" className="btn btn-secondary me-3">Github Server </a>
                </div>
            </div>
        </div>
    );
};

export default Project2;