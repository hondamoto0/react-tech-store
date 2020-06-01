import React, { Component } from 'react';
import { FaDolly , FaRedo , FaDollarSign } from 'react-icons/fa';
import styled from 'styled-components';
class Services extends Component {
    state = {
        services : [
            {
                id:1,
                icon: <FaDolly/>,
                title:'free shipping',
                text:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
            },
            {
                id:2,
                icon: <FaRedo/>,
                title:'free shipping',
                text:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
            },
            {
                id:3,
                icon: <FaDollarSign/>,
                title:'free shipping',
                text:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
            }
        ]
    }
    render() {
        return (
            <ServiceWrapper className="py-5">
                <div className="container">
                    <div className="row">
                    {this.state.services.map(service => {
                        return (
                            <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={service.id}>
                            <div className="service-icon">{service.icon}</div>
                            <div className="mt-3 text-capitalize">{service.title}</div>
                            <div className="mt-3">{service.text}</div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </ServiceWrapper>
        );
    }
}
const ServiceWrapper = styled.section`
background:rgba(95,183,234,0.5);
.service-icon{
    font-size:2.5rem;
    color:var(--primaryColor);
}
p{
    color:var(--darkGrey);
}
`;
export default Services;