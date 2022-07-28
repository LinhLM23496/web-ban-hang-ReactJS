import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className="header">
            <div>
                <h1>
                    <Link to="/">
                        <img className="img-fluid logo" src="http://tomahosoft.com/wp-content/uploads/2021/09/LOGO-TOMAHO-FINAL-1.png" alt="sofbox" />
                    </Link>
                </h1>
            </div>
            <div>
                <ul className="nav">
                    <li>
                        <Link className="header-link" to="/">SẢN PHẨM</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/cart">GIỎ HÀNG</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/purchase">HÓA ĐƠN</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;