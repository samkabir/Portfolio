import React from 'react';
import img from '../../Images/optima.png';

const Project3 = () => {
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