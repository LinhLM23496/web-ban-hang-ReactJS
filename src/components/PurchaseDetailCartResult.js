import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from '../controller/ActionTypes';

const PurchaseDetailCartResult = (carts) => {
    let setBtn = carts.carts.length ? carts.carts.length : 0;
    const dispatch = useDispatch();
    const addPurchase = (e) => {
        dispatch({
            type: Actions.UPDATE_PURCHASE_SAGA,
            ttype: 'add_purchase',
            data: totalAmount(carts.carts)
        })
    };
    const totalAmount = (carts) => {
        let totalAllCart = {
            products: [],
            total: 0,
            totalVax: 0,
            totalAmount: 0
        };
        if(carts.length > 0) {
            for(let i=0; i < carts.length; i++) {
                totalAllCart.products.push({
                    id: carts[i].product.id,
                    quantity: carts[i].quantity,
                    price: carts[i].product.price
                });
                totalAllCart.total += carts[i].product.price * carts[i].quantity;
                totalAllCart.totalVax += carts[i].product.price * carts[i].quantity * carts[i].product.vax;
                totalAllCart.totalAmount += carts[i].product.price * carts[i].quantity * (carts[i].product.vax + 1);
            }
        }
        return totalAllCart;
    }
    return (
        <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>     
                    <strong>{totalAmount(carts.carts).totalAmount.toFixed(0)} VND</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button
                    disabled={!setBtn} 
                    onClick={addPurchase}
                    type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                    <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>        
    );
}

export default PurchaseDetailCartResult;