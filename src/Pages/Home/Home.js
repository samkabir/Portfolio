import React from 'react';
import img from "../../Images/0.png";
import file from "../../Files/Samiul_Kabir_RESUME.pdf";
import { Link } from 'react-router-dom';
import img1 from '../../Images/2.png';
import img2 from '../../Images/3.png';
import img3 from '../../Images/4.png';

const Home = () => {
    const main_img = {
        width: "100%",
        borderTopLeftRadius: "80% 70%",
        borderTopRightRadius: "80% 70%",
        borderBottomRightRadius: "80% 70%",
        borderBottomLeftRadius: "80% 70%",
        minHeight: "500px"
    }
    const resumebtn ={
        width: "120px",
        height: "40px"
    }
    const roundimg = {
        border: "2px solid grey",
        borderTopLeftRadius: "80% 70%",
        borderTopRightRadius: "80% 70%",
        borderBottomRightRadius: "80% 70%",
        borderBottomLeftRadius: "80% 70%",
        padding:" 15px",
        width: "95%"
    }
    const cardsdetail = {
        minHeight:'300px',
        boxShadow: "0px 0px 20px black",
        borderRadius: "20px"
    }

    return (
        <>
        <div className="container my-5">
            <div className="text-center my-5">
                <h1>Samiul Kabir</h1>
                <h2>MERN Stack Developer</h2>
                <form method="get" action={file}>
                    <button className="btn btn-secondary my-3" style={resumebtn} type="submit">Resume</button>
                </form>
            </div>
            
            <div className="row my-5">
                <div className="col-md-3">
                    <div>
                        <h3>Goals</h3>
                        <p>My goal is to obtain a challenging position that fully utilizes my skills and provides me with suitable
                            opportunities to grow my technical and communication skills which would help me as a fresher to grow
                            while working towards the organizational goal.</p>
                    </div>
                    <div>
                        <h3>Education</h3>
                        <ul>
                            <li>
                                <b>BRAC University,</b> Bachelor of Science in Computer Science and Engineering 
                            </li>
                            <li>
                                <b>Pearson Edexcel,</b> Ordinary and Advanced Levels
                            </li>
                        </ul>
                    </div>
                <div>
                    <h3>Extra-Curiculars</h3>
                    <b>MERN Stack Development Course,</b> Programming Hero
                </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div style={roundimg}>
                        <img src={img} style={main_img} alt="asdasd" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="float-md-end">
                        <div>
                            <h3>Skills</h3>
                            <p>MongoDB, Express JS, React JS, Node JS, JavaScript , HTML, CSS, WordPress, BootStrap, Java, MySQL, PHP, Tailwind, Material UI, Python, Typescript.</p>
                        </div>
                        <div>
                            <h3>Awards</h3>
                            <p>Daily Star High Achieving Award</p>
                        </div>
                        <div>
                            <h3>Tools</h3>
                            <p>Netbeans, Eclipse, Anaconda, Visual Studio Code, Sublime Text, Firebase, Github</p>
                        </div>
                        <div>
                            <h3>Language</h3>
                            <ul>
                                <li>
                                    English: Fluent
                                </li>
                                <li>
                                    Bangla: Native
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container my-5">
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
        
        </>
    );
};

export default Home;