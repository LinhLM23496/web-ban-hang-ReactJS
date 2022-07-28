import React from "react";
import Purchases from "./Purchases";
import { useSelector } from "react-redux";

const PurchaseList = () => {
    const purchases = useSelector(state => state.purchaseReducer);
    const showPurchases = (purchases) => {
        let result = <h1>HÓA ĐƠN ĐANG TRỐNG</h1>;
        if (purchases.length > 0) {
            result = purchases.map((purchases, index) => {
                return <Purchases key={index} data={purchases} />
            });
        }
        return result;
    }
    return (
        <section className="section purchaseList">
            <div className="table-responsive">
                <ul>
                    {showPurchases(purchases)}
                </ul>
            </div>
        </section>    
    );
}

export default PurchaseList;