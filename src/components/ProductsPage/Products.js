import React from 'react';
import Product from '../Product';
import Title from '../Title';
import { ProductConsumer } from '../../context/context';
const Products = () => {
    return (
        <ProductConsumer>
            {
                value => {
                    const { filteredProducts } = value;
                        return (
                            <section className="py-5">
                                <div className="container">
                                <Title title="Products" center="true"/>
                                    <div className="row">
                                    {
                                        filteredProducts.map(product => {
                                            return  <Product key={product.id} product={product} />
                                        })
                                       
                                    }
                                    </div>
                                </div>
                            </section>)
                }
            }
        </ProductConsumer>

    );
};

export default Products;