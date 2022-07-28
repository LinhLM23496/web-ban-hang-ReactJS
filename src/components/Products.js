import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";


const Products = () => {
    const products = useSelector(state => state.productReducer);
    const showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={product.id} product={product} />
            });
        }
        return result;
    }
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                { showProducts(products) }
            </div>
        </section>
    );
}

export default Products;