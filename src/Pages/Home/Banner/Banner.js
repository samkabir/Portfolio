import React from 'react';
import file from "../../../Files/Samiul_Kabir_RESUME.pdf";

const Banner = () => {
    const resumebtn ={
        width: "120px",
        height: "40px"
    }
    return (
        <div>
            <div className="text-center my-5" style={{padding: '100px 0px'}}>
                <h1>Samiul Kabir</h1>
                <h2>MERN Stack Developer</h2>
                <form method="get" action={file}>
                    <button className="btn btn-secondary my-3" style={resumebtn} type="submit">Resume</button>
                </form>
            </div>
        </div>
    );
};

export default Banner;