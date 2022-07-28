import React from "react";

const Purchase = (purchase) => {
    let total = purchase.cart.product.price * purchase.cart.quantity;

    return (
        <tr>
            <td></td>
            <td>
                <h5>
                    <strong>{purchase.cart.product.name}</strong>
                </h5>
            </td>
            <td>{purchase.cart.product.price} $</td>
            <td className="center-on-small-only">
                <span className="qty">{purchase.cart.quantity}</span>
            </td>
            <td>{total} VND</td>
        </tr>
        
    );
}

export default Purchase;