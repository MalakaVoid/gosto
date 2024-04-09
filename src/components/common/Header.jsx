import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.svg";
import { BiSearch } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import {navlist} from "../assets/data/data";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import {connect, useDispatch, useSelector} from "react-redux";
import cartimg from '../assets/images/cart.png';
import {DELETE} from '../../controller/action';

export const Header = () => {

    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header");

        header.classList.toggle("active", this.window.scrollY > 100);
    });

    const [mobile, setMobile] = useState(false);

    // card add
    const getdata = useSelector((state) => state.cartsReducer.carts);

    const [cartList, setCartList] = useState(false);

    const handleClose = () =>{
        setCartList(false);
    }

    const dispatch = useDispatch();
    const deleteProduct = (id) => {
        dispatch(DELETE(id));
    }

    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);

    const totals = () => {
        let price = 0;
        getdata.map((item) => {
            price += parseFloat(item.price) * parseFloat(item.qty);
        });

        setPrice(price.toFixed(2));
    }

    const totalQty = () => {
        let qty = 0;
        getdata.map((item) => {
            qty += parseInt(item.qty);
        });

        setQty(qty);
    }

    useEffect(() => {
        totals();
    }, [totals])

    useEffect(() => {
        totalQty();
    }, [totalQty])

  return (
    <>
        <header className='header'>
            <div className="container">
                <nav>
                    <div className="toggle">
                        <button onClick={()=>setMobile(!mobile)}>
                            {mobile ? <AiOutlineClose className='close heIcon' /> : <AiOutlineMenu  className="open heIcon" />}
                        </button>
                    </div>
                    <div className="left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="center">
                        <ul className={mobile ? "mobile-nav" : "menu"}>
                            {navlist.map((nav)=>(
                                <li key={nav.id}>
                                    <Link to={nav.path}>{nav.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="right">
                    <div className="right_search">
                        <input type="text" placeholder='Search Products...' />
                        <BiSearch className='searchIcon heIcon' />
                    </div>
                    <div className="right_user">
                    <RiUser3Line className="userIcon heIcon" />
                        <AiOutlineHeart className="userIcon heIcon" />
                    </div>
                    <div className="right_card">
                        <button className='button' onClick={() => setCartList(!cartList)}>
                            <BsBagCheck className="shop heIcon" />
                            MY CART ({qty})
                        </button>
                        <div className={cartList? "showCart": "hideCart"}>
                            {getdata.length ? (
                                <section className="details">
                                    <div className="details_title">
                                        <h3>Photo</h3>
                                        <p>Product Name</p>
                                    </div>
                                    {getdata.map((item)=>(
                                        <div className="details_content">
                                            <div className="details_content_img">
                                                <Link to={`/cart/${item.id}`} onClick={handleClose}>
                                                    <img src={item.cover} alt="" />
                                                </Link>
                                            </div>
                                            <div className="details_content_detail">
                                                <div className="details_content_detail_price">
                                                    <p>{item.title.slice(0, 20)}...</p>
                                                    <p>Price: ${item.price}</p>
                                                    <p>Quantity: {item.qty}</p>
                                                </div>
                                            </div>

                                            <div className="details_content_detail_icon">
                                                <i onClick={() => deleteProduct(item.id)}>
                                                    <AiOutlineDelete />
                                                </i>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="details_total">
                                        <h4>TOTAL: ${price}</h4>
                                    </div>
                                </section>
                            ): (
                                <div className="empty">
                                    <p>Your cart is empty</p>
                                    <img src={cartimg} alt="" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header;

// const mapStateToProps = (state) => {
//     return {
//         amount: state.amount,
//     }
// }
// connect(mapStateToProps)(Header);