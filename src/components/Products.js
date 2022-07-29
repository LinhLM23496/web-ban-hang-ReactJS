import React, { Component } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import AddProductForm from "./AddProduct";


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
        <div>
            {/* <button
                // onClick={addPurchase}
                type="button" className="btn btn-primary waves-effect waves-light">add product
                <i className="fa fa-angle-right right"></i>
            </button> */}
            {/* <AddProductForm /> */}
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    { showProducts(products) }
                </div>
            </section>
        </div>
    );
}

export default Products;