import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
const FooterJson = "./jsons/footer.json";

export default function Footer() {
    const [footer, setFooter] = useState([]);

    useEffect(() => {
        axios.get(FooterJson)
            .then(res => setFooter(res.data))
            .catch(err => setFooter(err))
    }, [])

    if (!footer) return null;

    return (
        <>
            {footer.map((post) => (
                <h1>{post.test}</h1>
            ))}
        </>
    )
}