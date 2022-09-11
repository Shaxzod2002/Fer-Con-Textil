import React from 'react';
import Header from "../../Pages/Header";
import About from "../../Pages/About";
import Products from "../../Pages/Products";
import Gallary from "../../Pages/Gallary";
import Partnors from "../../Pages/Partnors";
import Contacts from "../../Pages/Contacts";
import Footer from "../../Pages/Footer";

export default function Fercontextil() {
    window.addEventListener('load', () => {
        document.getElementById('box').style.display = "block";
    })
    return (
        <>
            <div id="box" style={{display: "none"}}>
                <Header />
                <About />
                <Products />
                <Gallary />
                <Partnors />
                <Contacts />
                <Footer />
            </div>
        </>
    );
}