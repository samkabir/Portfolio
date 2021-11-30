import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../Images/2.png';
import img2 from '../../../Images/3.png';
import img3 from '../../../Images/4.png';


const Portfolio = () => {
    const cardsdetail = {
        minHeight:'300px',
        boxShadow: "0px 0px 20px black",
        borderRadius: "20px"
    }
    return (
        <div>
            <h3 className="text-center my-5">Projects</h3>
            <div className="row">
                <div className="col-md-4">
                    <div class="card-group">
                        <div class="card" style={cardsdetail}>
                            <img class="card-img-top" style={{borderRadius:'20px', padding:'5px'}} src={img1} alt="Website 1" />
                            <div class="card-body">
                                <h5 class="card-title">Shades Sunglasses</h5>
                                <br />
                                <Link to="/web1"><p className="btn btn-secondary">View Project Details</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card-group">
                        <div class="card" style={cardsdetail}>
                            <img class="card-img-top" style={{borderRadius:'20px', padding:'5px'}} src={img2} alt="Website 2" />
                            <div class="card-body">
                                <h5 class="card-title">Evanto Tourism</h5>
                                <br />
                                <Link to="/web2"><p className="btn btn-secondary">View Project Details</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card-group">
                        <div class="card" style={cardsdetail}>
                            <img class="card-img-top" style={{borderRadius:'20px', padding:'5px'}} src={img3} alt="Website 3" />
                            <div class="card-body">
                                <h5 class="card-title">Optima Diagonostic Center</h5>
                                <br />
                                <Link to="/web3"><p className="btn btn-secondary">View Project Details</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;