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
                <div className="about" id="about">
                    <div className="about-gallary" data-aos="zoom-in">
                        <img src={post.one} alt="Image" />
                        <img src={post.two} alt="Image" />
                        <img src={post.three} alt="Image" />
                    </div>
                    <div className="about-body pt-5">
                        <div className="left" data-aos="fade-right">
                            <h1 className="title-page">{post.title}</h1>
                            <p className="paragraph-one">{post.paragraph1}</p>
                            <p className="paragraph-two">{post.paragraph2}</p>
                        </div>
                        <div className="right" data-aos="fade-left"></div>
                    </div>
                </div>
            ))}
        </>
    )
}