import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
const GallaryJson = "./jsons/gallary.json";

export default function Gallary() {
    const [gallary, setGallary] = useState([]);

    useEffect(() => {
        axios.get(GallaryJson)
            .then(res => setGallary(res.data))
            .catch(err => setGallary(err))
    }, [])

    if (!gallary) return null;

    return (
        <>
            {gallary.map((post) => (
                <h1>{post.test}</h1>
            ))}
        </>
    )
}