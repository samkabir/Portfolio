import React from 'react';

const Contact = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center pb-5">Contact Me</h2>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" />
                </div>
                <br />
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" />
                </div>
                <br />
                <div class="form-group">
                    <textarea class="form-control"  rows="3" placeholder="TextArea"></textarea>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;