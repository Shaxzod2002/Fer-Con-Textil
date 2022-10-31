import React from 'react';
import Header from "../../Pages/Header";
import About from "../../Pages/About";
import Products from "../../Pages/Products";
import Gallary from "../../Pages/Gallary";
import Partnors from "../../Pages/Partnors";
import Contacts from "../../Pages/Contacts";
import Footer from "../../Pages/Footer";
import NavbarPhone from '../../Pages/Navbar Phone';

export default function Fercontextil() {
    return (
        <>
            <NavbarPhone />
            <Header />
            <About />
            <Products />
            <Gallary />
            <Partnors />
            <Contacts />
            <Footer />
        </>
    );
}