import React from 'react';
import Products from '../components/ProductsPage/Products';
import Hero from '../components/Hero';
import productBg from '../images/productsBcg.jpeg';
const ProductsPage = () => {
    return (
        <div>
            <Hero img={productBg} />
            <Products />
        </div>
    );
};

export default ProductsPage;