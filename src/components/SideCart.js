import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context/context';
const SideCart = () => {
    return (
        <ProductConsumer>
            {value => {
                const {cartItems,cartOpen} = value;
                return (
                <CartWrapper show={cartOpen}>
                    <h1>{cartItems}</h1>
                </CartWrapper>
                )
            }
            }
        </ProductConsumer>
    );
};
const CartWrapper = styled.div`
position:fixed;
z-index:1;
background:var(--mainGrey);
top:60;
right:0;
border-left:4px solid var(--primaryColor);
height:100%;
width:100%;
transform:${(props) => props.show ? "translateX(0)" : "translateX(100%)"};
transition:var(--mainTransition);
@media (min-width:570px){
    width:20rem;
}
`;

export default SideCart;