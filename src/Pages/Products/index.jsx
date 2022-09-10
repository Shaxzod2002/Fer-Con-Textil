import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
const ProductsJson = "./jsons/products.json";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(ProductsJson)
            .then(res => setProducts(res.data))
            .catch(err => setProducts(err))
    }, [])

    if (!products) return null;

    return (
        <>
            <div className="products row" id="product">
                <h1 className="title-page">Наши продукты</h1>
                <div className="products-gallary">
                    {products.map((post) => (
                        <div className="products-gallary-box">
                            <div className="products-gallary-box-head">
                                <img src={post.img} alt="image" />
                            </div>
                            <div className="products-gallary-box-body">
                                <div className="top">

                                </div>
                                <div className="bottom text-center">
                                    <h3 className="text">{post.text}</h3>
                                    <a href="?tell=null" className="text-decoration-none">{post.order}</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}