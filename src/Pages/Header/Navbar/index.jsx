import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
import { FaBars, FaTimes } from 'react-icons/fa';
import FerKonLogo from '../../../Components/image/logo.png';
const NavbarJson = "./jsons/navbar.json";

export default function Navbar() {
    const [navbar, setNavbar] = useState([]);
    const [bars, setBars] = useState(false);

    useEffect(() => {
        axios.get(NavbarJson)
            .then(res => setNavbar(res.data))
            .catch(err => setNavbar(err))
    }, [])
    const unOrderedList = document.getElementById('un-ordered-list');
    const showBars = () => {
        if (bars) {
            setBars(false)
            unOrderedList.classList.remove('active')
        } else {
            setBars(true)
            unOrderedList.classList.add('active')
        }
    }

    if (!navbar) return null;

    return (
        <>
            <div className="row">
                <nav className="d-flex">
                    <div className="brand d-flex justify-content-center align-items-center text-light">
                        <img src={FerKonLogo} alt="Ferkon" />
                        <div onClick={showBars} >
                            {!bars ? <FaBars className="bars-icon" id="bars" /> : <FaTimes className="bars-icon" id="bars" />}
                        </div>

                    </div>
                    <ul className="list-inline align-items-center justify-content-around" id="un-ordered-list">
                        {navbar.map((post, id) => (
                            <li key={id} onClick={showBars}>
                                <a
                                    href={
                                        post.nav == "Главная" ? "#home" : post.nav == "О нас" ? "#about" : post.nav == "Наши продукты" ? "#product" : post.nav == "Партнеры" ? "#partnor" : post.nav == "Свяжитесь с нами" ? "#contact" : "#null"
                                    }
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