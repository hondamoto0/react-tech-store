import React from 'react';
import Title from '../Title';
const Contact = () => {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                <Title title="Contact" />
                    <form className="mt-5" action="https://formspree.io/learncodetutorial@gmail.com" method="POST">
                        {/* first */}
                        <div className="form-group">
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="john smith"
                            />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="email@gmail.com"
                            />
                        </div>
                        {/* subject */}
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="imporant!!!!"
                            />
                        </div>
                        {/* message */}
                        <div className="form">
                            <textarea 
                            name="message"
                            className="form-control" 
                            rows="10"
                            placeholder="hello there buddy"
                            >
                            </textarea>
                        </div>
                        {/* submit */}
                        <div className="form-group mt-3">
                        <input value="Send" type="submit" className="form-control bg-primary text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default Contact;