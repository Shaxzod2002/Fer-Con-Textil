import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
import Navbar from "./Navbar";
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
            <header className="row" id="home">
                <div className="theme">
                    <Navbar />
                    {header.map((post) => (
                        <div className="body" data-aos="zoom-in">
                            <h1 className="title">
                                {post.title}
                            </h1>
                            <p className="paragraph">
                                {post.paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </header>
        </>
    )
}