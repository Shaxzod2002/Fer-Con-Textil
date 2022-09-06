import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
const AboutJson = "./jsons/about.json";

export default function About() {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        axios.get(AboutJson)
            .then(res => setAbout(res.data))
            .catch(err => setAbout(err))
    }, [])

    if (!about) return null;
    
    return (
        <>
            {about.map((post) => (
                <h1>{ post.test }</h1>
            ))}
        </>
    )
}