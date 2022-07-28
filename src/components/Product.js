import React from "react";
import { useDispatch } from 'react-redux';
import * as Actions from '../controller/ActionTypes';

const Product = (product) => {
    const dispatch = useDispatch();
    const clickThemVaoMyCart = (e) => {
        dispatch({
            type: Actions.UPDATE_CART,
            ttype: 'add_cart',
            data: {
                id: product.product.id,
            }
        })
    };
    return(
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="product-img view overlay hm-white-slight z-depth-1">
                    <img src={product.product.image}
                        className="img-fluid" alt={product.product.name} />
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <p>{product.product.name}</p>
                        </strong>
                    </h4>
                    <p className="card-text">
                        {product.product.description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{product.product.price} VND</span>
                        <span className="right">
                            <button onClick={clickThemVaoMyCart}>
                                Thêm vào giỏ hàng
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;