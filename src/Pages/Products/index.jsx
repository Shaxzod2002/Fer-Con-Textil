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
            {products.map((post) => (
                <h1>{post.test}</h1>
            ))}
        </>
    )
}