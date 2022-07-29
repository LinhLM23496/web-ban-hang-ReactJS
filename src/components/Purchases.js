import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../controller/ActionTypes';

const Purchases = (data) => {
    const dispatch = useDispatch();
    const products = data.data
    const deletePurchase = (e) => {
        dispatch({
            type: Actions.DELETE_CART_PURCHASE_SAGA,
            ttype: 'delelte_cart_purchase',
            data: products.cartId,
        })
    };
    return (
        <table className="table product-table">
            <thead>
                <tr>
                    <th>ĐƠN HÀNG</th>
                    <th></th>
                    <th>Tổng Tiền</th>
                    <th>Tổng Tiền Thuế</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h5>
                            <strong>{data.data.cartName}</strong>
                        </h5>
                    </td>
                    <td></td>
                    <td>{data.data.total} VND</td>
                    <td>{data.data.totalVax} VND</td>
                </tr>
                <tr>
                    <td colSpan="2"></td>
                    <td>
                        <h4>
                            <strong>Tổng Tiền {'(có VAT)'}</strong>
                        </h4>
                    </td>
                    <td>
                        <h4>
                            <strong>{data.data.totalAmount} VND</strong>
                        </h4>
                    </td>
                    <td colSpan="3">
                        <Link to={`/purchase/${data.data.cartId}`}>
                            <button
                                type="button" className="btn btn-primary waves-effect waves-light">sửa đơn hàng
                                <i className="fa fa-angle-right right"></i>
                            </button>
                        </Link>
                        <button
                            onClick={deletePurchase}
                            type="button" className="btn btn-warning waves-effect waves-light">xóa đơn hàng
                            <i className="fa fa-angle-right right"></i>
                        </button>
                    </td>
                </tr> 
            </tbody>
        </table>
           
    );
};



export default Purchases;