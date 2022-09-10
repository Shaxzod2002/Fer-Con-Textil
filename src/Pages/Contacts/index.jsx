import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
import { GrMapLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
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
                        <div className="left">
                            <h1 className="title-page">{post.title}</h1>
                            <div className="option">
                                <div className="loaction d-flex align-items-center">
                                    <GrMapLocation className="icon location-icon" />
                                    <p>{post.location}</p>
                                </div>
                                <div className="phone d-flex align-items-center">
                                    <FiPhoneCall className="icon number-icon" />
                                    <div className="phone__numbers">
                                        <p>{post.number1}</p>
                                        <p>{post.number2}</p>
                                    </div>
                                </div>
                                <div className="delivery d-flex align-items-center">
                                    <TbTruckDelivery className="icon delivery-icon" />
                                    <p>{post.delivery}</p>
                                </div>
                            </div>
                        </div>
                        <div className="right d-flex justify-content-center align-items-center">
                            <Maps />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}