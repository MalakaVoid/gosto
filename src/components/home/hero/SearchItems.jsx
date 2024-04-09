import React, { useState } from 'react';
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

export default function SearchItems({product, value, onSearch}) {

  return (
    <>
        <section className="searchItems">
            <div className="product_items">
                {product.filter((item) => {
                    const searchkey = value.toLowerCase();
                    const title = item.title.toLowerCase();

                    return searchkey && title.startsWith(searchkey) && title !== searchkey
            }).slice(0, 10).map((item) => (
                <div className="box" key={item.id}>
                    <div className="img">
                        <img src={item.cover} alt="" />
                        <div className="overlay">
                            <button className="button">
                                <FiShoppingBag />
                            </button>
                            <button className="button">
                                <AiOutlineHeart />
                            </button>
                            <button className="button" >
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
        </section>
    </>
  )
}