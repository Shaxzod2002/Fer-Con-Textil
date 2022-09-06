import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
const PartnorsJson = "./jsons/partnors.json";

export default function Partnors() {
    const [partnors, setPartnors] = useState([]);

    useEffect(() => {
        axios.get(PartnorsJson)
            .then(res => setPartnors(res.data))
            .catch(err => setPartnors(err))
    }, [])

    if (!partnors) return null;

    return (
        <>
            {partnors.map((post) => (
                <h1>{post.test}</h1>
            ))}
        </>
    )
}