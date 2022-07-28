import React from "react";
import CartItem from "./CartItem";
import CartResult from "./CartResult";
import { useSelector } from "react-redux";

const Cart = () => {
    const carts = useSelector(state => state.cartReducer);
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
                return <CartItem key={index} data={product}  />
            });
        }
        return result;
    }
    return (
        <section className="section">
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th>Tiền Thuế</th>
                        </tr>
                    </thead>
                    <tbody>
                        { showCarts(products, carts) }
                        <CartResult carts={productItem} />
                    </tbody>
                </table>
            </div>
        </section>       
    );
}

export default Cart;