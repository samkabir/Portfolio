import React from 'react';
import img from "../../../Images/1.png";

const About = () => {
    const main_img = {
        width: "100%",
        borderTopLeftRadius: "80% 70%",
        borderTopRightRadius: "80% 70%",
        borderBottomRightRadius: "80% 70%",
        borderBottomLeftRadius: "80% 70%",
        minHeight: "450px"
    }
    const roundimg = {
        border: "2px solid grey",
        borderTopLeftRadius: "80% 70%",
        borderTopRightRadius: "80% 70%",
        borderBottomRightRadius: "80% 70%",
        borderBottomLeftRadius: "80% 70%",
        padding:"15px",
        width: "80%",
        maxHeight: "485px"
    }
    const skill = {
        backgroundColor: 'grey',
        lineHeight: '250%',
        padding: '5px',
        border: '2px solid black',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '500'
    }
    return (
        <div>
            <div className="row my-5" id="aboutme">
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
                    <h3 style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'clip'}}>Professional Training</h3>
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
                            <p><span style={skill}>MongoDB</span> <span style={skill}>Express JS</span> <span style={skill}>ReactJS</span> <span style={skill}>NodeJS</span> <span style={skill}>JavaScript</span> <span style={skill}>HTML</span> <span style={skill}>CSS</span> <span style={skill}>WordPress</span> <span style={skill}>BootStrap</span> <span style={skill}>Java</span> <span style={skill}>MySQL</span> <span style={skill}>PHP</span> <span style={skill}>Tailwind</span> <span style={skill}>Material UI</span> <span style={skill}>Python</span> <span style={skill}>Typescript</span></p>
                        </div>
                        <div>
                            <h3>Awards</h3>
                            <p>Daily Star High Achieving Award</p>
                        </div>
                        <div>
                            <h3>Tools</h3>
                            <p><span style={skill}>Netbeans</span> <span style={skill}>Eclipse</span> <span style={skill}>Anaconda</span> <span style={skill}>VisualStudioCode</span> <span style={skill}>SublimeText</span> <span style={skill}>Firebase</span> <span style={skill}>Github</span></p>
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
    );
};

export default About;