import React from 'react';
import img1 from '../../Images/shades1.png';
import img2 from '../../Images/shades2.png';
import img3 from '../../Images/shades3.png';

const Project1 = () => {
    
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
                    <h3>Shades Sunglasses Limited</h3>
                    <ul>
                        <li>This Website has 45 Routes, 1 home, 2 private, 1 login, 1 detail(for each product).</li>
                        <li>Purchase and DashBoard and its sub Routes are Private.</li>
                        <li>The Website has Home, Explore pages.</li>
                        <li>DashBoard has Two type of access, one is USer level access and one is admin level access.</li>
                        <li>The website has one login system - Email Password SignUp.</li>
                        <li>Admin Level has Manage all products, Manage All Orders, Add a product and Make an Admin page.</li>
                        <li>User Level has My Orders, Make a review and payment page.</li>
                        <li>In the Tour Packages Section in the home page, I have fetched 6 data which shows various Tour plans.</li>
                        <li>Each Product redirects to a purchase page, which has a detailed info about the product and a form for product.</li>
                    </ul>
                    <a target="_blank" rel="noreferrer" href="https://shades-sunglasses.web.app/" className="btn btn-secondary me-3">Live Website </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/programming-hero-web-course-4/niche-website-client-side-samkabir" className="btn btn-secondary me-3">Github Client </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/programming-hero-web-course-4/niche-website-server-side-samkabir" className="btn btn-secondary me-3">Github Server </a>
                </div>
            </div>
        </div>
    );
};

export default Project1;