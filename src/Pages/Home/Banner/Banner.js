import React from 'react';
import file from "../../../Files/Samiul_Kabir_RESUME.pdf";
import Typical from 'react-typical';

const Banner = () => {
    const resumebtn ={
        width: "120px",
        height: "40px"
    }
    return (
        <>  
            <div className="text-center my-5" style={{padding: '100px 0px'}}>
                
                <div>
                    <h1>Samiul Kabir</h1>
                    <h2><Typical 
                        steps={[
                            "MERN Stack Developer",
                            1000,
                            "Software Engineer",
                            1000,
                            "React JS Developer",
                            1000,

                        ]}
                        loop={Infinity}
                    ></Typical>
                    </h2>
                    <form method="get" action={file}>
                        <button className="btn btn-secondary my-3" style={resumebtn} type="submit">Resume</button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Banner;
