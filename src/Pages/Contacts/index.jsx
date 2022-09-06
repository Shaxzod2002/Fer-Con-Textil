import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
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
            {contacts.map((post) => (
                <h1>{post.test}</h1>
            ))}
        </>
    )
}