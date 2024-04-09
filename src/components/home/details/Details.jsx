import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { useParams, useNavigate  } from 'react-router-dom';
import { MdStarRate } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ADD, DELETE } from '../../../controller/action';


export default function Details() {

    const [data, setData] = useState([]);
    const getdata = useSelector((state) => state.cartsReducer.carts);

    const {id} = useParams();

    const compare = () =>{
        let compareData = getdata.filter((item) => item.id == id)
        setData(compareData);
        console.log(data);
        console.log(getdata);
    }

    useEffect(() => {
        compare();
    }, [id])

    const dispatch = useDispatch();
    const increment = (e) => {
        dispatch(ADD(e));
    }

    const history = useNavigate();
    const decrement = (e) => {
        dispatch(DELETE(e.id));
        if (e.qty == 0) {
            history("/");
        }
    }


  return (
    <>
        <article>
            <section className="details">
                <h2 className="details_title">
                    Product Details page
                </h2>
                {data.map((item) => (
                    <div className="details_content">
                        <div className="details_content_img">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="details_content_detail">
                            <h1>{item.title}</h1>
                            <div className="rating">
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <label htmlFor="">(1 customer review)</label>
                            </div>
                            <h3>${item.price * item.qty}</h3>
                            <p>{item.author}</p>
                            <div className="qty">
                                <div className="count">
                                    <button onClick={() => decrement(item)}>
                                        <AiOutlineMinus />
                                    </button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => increment(item)}>
                                        <AiOutlinePlus />
                                    </button>
                                </div>
                                <button className="button">Add To Cart</button>
                            </div>
                            <div className="desc">
                            <h4>PRODUCTS DESCRIPTION</h4>
                            <p>Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs.</p>
                            <h4> PRODUCT DETAILS</h4>
                            <ul>
                                <li>
                                <p> Material: Plastic, Wood</p>
                                </li>
                                <li>
                                <p>Legs: Lacquered oak and black painted oak</p>
                                </li>
                                <li>
                                <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                                </li>
                                <li>
                                <p>Length: 48cm</p>
                                </li>
                                <li>
                                <p>Depth: 52 cm</p>
                                </li>
                                <li>
                                <p>Seat Height: 44 cm</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </article>
    </>
  )
}
