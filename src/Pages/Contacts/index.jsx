import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
import Maps from "./Maps";
const ContactsJson = "./jsons/contacts.json";


export default function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get(ContactsJson)
            .then(res => setContacts(res.data))
            .catch(err => setContacts(err))
    }, [])

    if (!contacts) return null;

    return (
        <>
            <div className="contact" id="contact">
                {contacts.map((post) => (
                    <div className="contact-page">
                        <div className="left" data-aos="fade-right">
                            <h1 className="title-page">{post.title}</h1>
                            <div className="option">
                                <div className="loaction option-box d-flex align-items-center gap-2">
                                    <div className="image">
                                        <img src={post.locationLogo} alt="location logo" />
                                    </div>
                                    <div className="paragraph">
                                        <p>{post.location}</p>
                                    </div>
                                </div>
                                <div className="phone option-box d-flex align-items-center">
                                    <div className="image">
                                        <img src={post.phoneLogo} alt="phone logo" />
                                    </div>
                                    <div className="paragraph">
                                        <a href={`tell:${post.number1}`}>{post.number1}</a>
                                        <a href={`tell:${post.number2}`}>{post.number2}</a>
                                        <a href={`tell:${post.number3}`}>{post.number3}</a>
                                    </div>
                                </div>
                                <div className="delivery option-box d-flex align-items-center">
                                    <div className="image">
                                        <img src={post.deliveryLogo} alt="delivery logo" />
                                    </div>
                                    <div className="paragraph">
                                        <p>{post.delivery}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right d-flex justify-content-center align-items-center" data-aos="fade-left">
                            <Maps />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}