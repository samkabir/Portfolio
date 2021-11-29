import React from 'react';
import img from '../../Images/shades.png';

const Project1 = () => {
    const main_img = {
        width: "100%",
        maxHeight: "800px"
    }
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <img src={img} style={main_img} alt="webpage 1" />
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