import React from 'react';
import styled from 'styled-components';
import mainBcg from '../images/mainBcg.jpeg';
const Hero = ({ img, children, title , max}) => {
    return (
        <HeroWrapper img={img} max={max}>
            <div className="banner">
                <h1 className="title">{title}</h1>
                {children}
            </div>
        </HeroWrapper>
    );
};
const HeroWrapper = styled.div`
color:var(--mainWhite);
text-align:center;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(var(--primaryRGBA),var(--primaryRGBA)) , url(${props => props.img}) center/cover no-repeat;
min-height:${props => props.max ? "100vh" : "60vh"};
.title{
    padding-top:2rem;
    font-size:3.5rem;
    text-shadow:4px 4px 2px var(--primaryRGBA);
    text-transform:uppercase;
    letter-spacing:var(--mainSpacing);
}
`;
Hero.defaultProps = {
    img: mainBcg
}
export default Hero;