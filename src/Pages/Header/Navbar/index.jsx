import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
import { FaBars } from 'react-icons/fa'
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
            <div className="row">
                <nav className="d-flex">
                    <div className="brand d-flex justify-content-center align-items-center text-light">
                        <h5 className="title">Fer Kon <br /> Textile</h5>
                        <FaBars className="bars-icon" />
                    </div>
                    <ul className=" list-inline align-items-center justify-content-around">
                        {navbar.map((post, id) => (
                            <li key={id}>
                                <a
                                    href="#"
                                    className="text-decoration-none"
                                >
                                    {post.nav}
                                </a>
                            </li>
                        ))}

                    </ul>
                </nav>
            </div>
        </>
    )
}