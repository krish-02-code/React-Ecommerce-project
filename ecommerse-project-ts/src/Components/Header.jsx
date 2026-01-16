import './Header.css';
import { NavLink } from 'react-router';
import LogoWhite from '../assets/images/logo-white.png';
import MobileLogoWhite from '../assets/images/mobile-logo-white.png'
import CartIcon from '../assets/images/icons/cart-icon.png';
import SearchIcon from '../assets/images/icons/search-icon.png'
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

// type HeaderProps = {
//     cart:{
//         productId:string,
//         quantity:number,
//         deliveryOptionsId:string;
//     }[];
// };  for ts 

export function Header({ cart }) {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const search = searchParams.get('search')

    const [text, setText] = useState(search || '');

    function getText(event) {
        setText(event.target.value);
    }

    function searchOnClick() {
        navigate(`/?search=${text}`);
    }

    function EnterByKeys(event) {
        if (event.key === 'Enter') {
            setText(event.target.value);
            searchOnClick();
        }

        if (event.key === 'Escape') {
            setText('');
        }
    }

    let totalQuantity = 0;
    (cart || []).forEach((cartItems) => {
        totalQuantity += cartItems.quantity;
    });

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src={LogoWhite} />
                    <img className="mobile-logo"
                        src={MobileLogoWhite} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" value={text} onChange={getText} onKeyDown={EnterByKeys} />

                <button className="search-button" onClick={searchOnClick}>
                    <img className="search-icon" src={SearchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={CartIcon} />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>

            </div>
        </div>
    );
}