import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ieraup5', 'template_nwb6qm1', e.target, 'user_4RDdwcvJqf2l5AgF77KKU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <div className="row" style={{marginTop:'150px'}} >
            <div className="col-md-6">
                <h2 className="text-center pb-5">Contact Me</h2>
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <input type="text" class="form-control" placeholder="Name" name="name" required  />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="email" class="form-control" placeholder="Email" name="email" required />
                    </div>
                    <br />
                    <div className="form-group">
                        <textarea class="form-control"  rows="3" placeholder="TextArea" name="message" required  />
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-6">
                <h2 className="text-center">Contact Info</h2>
                <div className="" style={{paddingLeft:'50px', paddingTop:'20px'}}>
                    <i style={{fontSize:'30px'}} className="fas fa-map-marked-alt"></i> <p>West Shewrapara, Mirpur Dhaka 1206</p>
                    
                    <i style={{fontSize:'30px'}} className="fas fa-phone"></i> <p>(+880)1531262945</p>
                    
                    <i style={{fontSize:'30px'}} className="fas fa-envelope"></i> <p>samkabir26@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;