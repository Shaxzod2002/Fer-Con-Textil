import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
const HeaderJson = "./jsons/header.json";

export default function Header() {
    const [header, setHeader] = useState([]);

    useEffect(() => {
        axios.get(HeaderJson)
            .then(res => setHeader(res.data))
            .catch(err => setHeader(err))
    }, [])

    if (!header) return null;

    return (
        <>
            {header.map((post) => (
                <div>
                    <h1>{post.test}</h1>
                </div>
            ))}
        </>
    )
}