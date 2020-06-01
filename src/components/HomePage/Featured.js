import React from 'react';
import { ProductConsumer } from '../../context/context';
import Title from '../Title';
import Product from '../Product';
const Featured = () => {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Featured Products" center="true" />
                { /* products */}
                <div className="row my-5">
                    <ProductConsumer>
                        {value => {
                            const { featuredProducts } = value;
                            return featuredProducts.map(product =>
                                (<Product key={product.id} product={product} />)
                            )
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </section>
    );
};

export default Featured;