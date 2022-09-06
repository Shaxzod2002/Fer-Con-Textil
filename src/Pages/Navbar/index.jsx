import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
const NavbarJson = "./jsons/navbar.json";

export default function Navbar() {
    const [navbar, setNavbar] = useState([]);

    useEffect(() => {
        axios.get(NavbarJson)
            .then(res => setNavbar(res.data))
            .catch(err => setNavbar(err))
    }, [])

    if (!navbar) return null;

    return (
        <>
            {navbar.map((post) => (
                <h1>{post.test}</h1>
            ))}
        </>
    )
}