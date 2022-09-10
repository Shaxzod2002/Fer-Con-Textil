import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Example from "./Slider3D";
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
            <div className="gallary">
                <h1 className="title-page">Фотогалерея</h1>
                <Example />
            </div>
        </>
    )
}