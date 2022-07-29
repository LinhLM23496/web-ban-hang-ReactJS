import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import PurchaseDetailCartItem from "./PurchaseDetailCartItem";
import PurchaseDetailCartResult from "./PurchaseDetailCartResult";

const findCartInPurchase = (purchase, purchaseId) => {
    let index = -1;
    if( purchase.length > 0) {
        for(var i=0; i<purchase.length; i++){
            if(purchase[i].cartId == purchaseId){
                index = i;
                break;
            }
        }
    }
    return index;
}

const PurchaseDetail = () => {
    let { purchaseId } = useParams()
    const purchasesList = useSelector(state => state.purchaseListReducer);
    const cartId = findCartInPurchase(purchasesList, purchaseId);
    const carts = purchasesList[cartId].products;
    const products = useSelector(state => state.productReducer);
    let productItem = [];
    const showCarts = (products, carts) => {
        let result = <tr><th><h1>GIỎ HÀNG ĐANG TRỐNG</h1></th></tr>;
        if (carts.length > 0) {
            carts.map(cart => {
                result = products.filter((product) => {
                    return product.id === cart.id
                })
                let prod = {product: result[0], quantity: cart.quantity}
                return productItem.push(prod)
            })
            result = productItem.map((product, index) => {
                return <PurchaseDetailCartItem key={index} data={product} cartId={cartId} />
            });
        }
        return result;
    }
    return (
        <form className="section form-inline">
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { showCarts(products, carts)}
                        <PurchaseDetailCartResult carts={productItem} />
                    </tbody>
                </table>
            </div>
        </form>       
    );
}

export default PurchaseDetail;