import React, { useState } from 'react';
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import { ADD } from '../../../controller/action';

export default function ProductItem({data}) {

    const [openImage, setOpenImage] = useState(false);
    const [img, setImg] = useState("");

    const onOpenImage = (src) => {
        setImg(src);
        setOpenImage(true);
    }

    const dispatch = useDispatch();

    const addToCart = (e) =>{
        dispatch(ADD(e));
    }

  return (
    <>
        <div className="product_items">
            {data.map((item)=>(
                <div className="box" key={item.id}>
                    <div className="img">
                        <img src={item.cover} alt="" />
                        <div className="overlay">
                            <button className="button">
                                <FiShoppingBag onClick={() => addToCart(item)}/>
                            </button>
                            <button className="button">
                                <AiOutlineHeart />
                            </button>
                            <button className="button" onClick={() => onOpenImage(item.cover)}>
                                <FiSearch />
                            </button>
                        </div>
                        <div className="details">
                            <h3>{item.title}</h3>
                            <p>{item.author}</p>
                            <h4>Price: ${item.price}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className={openImage? "modelOpen": "modelClose"}>
            <div className="onClickImage">
                <img src={img} alt="" />
                <button className="button" onClick={() => setOpenImage(false)}>
                    <AiOutlineClose />
                </button>
            </div>
        </div>
    </>
  )
}
