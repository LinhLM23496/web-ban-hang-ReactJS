import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../controller/ActionTypes';

const CartItem = (data,cartId) => {
    const dispatch = useDispatch();
    const products = data.data
    const deleteCart = (e) => {
        dispatch({
            type: Actions.UPDATE_CART,
            ttype: 'delete_cart',
            data: products.product.id,
        })
    };
    const btnDown = (e) => {
        dispatch({
            type: Actions.UPDATE_CART,
            ttype: 'btndown_cart',
            data: products.product.id,
        })
    };
    const btnDownPurchase = (e) => {
        dispatch({
            type: Actions.UPDATE_PURCHASE_LIST,
            ttype: 'btndown_purchase_list',
            data: {
                id: products.product.id,
                cartId: data.cartId
            }
        })
    };
    const btnUp = (e) => {
        dispatch({
            type: Actions.UPDATE_CART,
            ttype: 'btnup_cart',
            data: {
                id: products.product.id,
            }
        })
    };
    const btnUpPurchase = (e) => {
        dispatch({
            type: Actions.UPDATE_PURCHASE_LIST,
            ttype: 'btnup_purchase_list',
            data: {
                id: products.product.id,
                cartId: data.cartId
            }
        })
    };
    const deletePurchase = (e) => {
        dispatch({
            type: Actions.UPDATE_PURCHASE_LIST,
            ttype: 'delete_purchase_list',
            data: {
                id: products.product.id,
                cartId: data.cartId
            }
        })
    };
    let total = products.product.price * products.quantity;
    let vax = products.product.price * products.quantity * products.product.vax;
    return (
        <tr>
            <th scope="row">
                <img src={products.product.image}
                    alt={products.product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{products.product.name}</strong>
                </h5>
            </td>
            <td>{products.product.price} VND</td>
            <td className="center-on-small-only">
                <span className="qty">{products.quantity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label
                        onClick={(data.cartId + 1) ? btnDownPurchase : btnDown}
                        className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>—</a>
                    </label>
                    <label 
                        onClick={(data.cartId + 1) ? btnUpPurchase : btnUp}
                        className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{total} VND</td>
            <td>{vax} VND</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item"
                    onClick={(data.cartId + 1) ? deletePurchase : deleteCart}
                    >
                    X
                </button>
            </td>
        </tr>                         
        
    );
}

export default CartItem;