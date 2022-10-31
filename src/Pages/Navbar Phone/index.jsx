import React from "react";
import "./main.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const ContactsJson = "./jsons/contacts.json";
export default function NavbarPhone() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get(ContactsJson)
      .then((res) => setContacts(res.data))
      .catch((err) => setContacts(err));
  }, []);

  if (!contacts) return null;
  return (
    <>
      <div className="navbar-phone row">
        <div className="left">
          <h1>Свяжитесь с нами</h1>
        </div>
        <div className="right">
          {contacts.map((post) => (
            <div className="phone">
              <a href={`tell:${post.number1}`}>{post.number1}</a>
              <a href={`tell:${post.number2}`}>{post.number2}</a>
              <a href={`tell:${post.number3}`}>{post.number3}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
