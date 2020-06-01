import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';
const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" alt="about company"
                            style={{ background: 'var(--mainGrey)' }}
                        />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="about us" />
                        <p className="text-lead text-muted my-3">lorem faddddsadasdasdasdasdasdasdasdasd
                            faddddsadasdasdasdasdasdasdasdasd
                            faddddsadasdasdasdasdasdasdasdasd</p>
                        <p className="text-lead text-muted my-3">lorem faddddsadasdasdasdasdasdasdasdasd
                        faddddsadasdasdasdasdasdasdasdasd
                            faddddsadasdasdasdasdasdasdasdasd</p>
                            <button className="main-link" 
                            type="button"
                            style={{marginTop:"2rem"}}>
                            More info
                            </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Info;