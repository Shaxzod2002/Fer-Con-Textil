import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
import FerKonLogo from '../../Components/image/logo.png';
import { MdOutlineMailOutline } from 'react-icons/md';
const FooterJson = "./jsons/footer.json";

export default function Footer() {
    const [footer, setFooter] = useState([]);
    // const [showYoutube, setYoutubeShow] = useState(false);
    const [showTelegram, setTelegramShow] = useState(false);
    // const [showFacebook, setFacebookShow] = useState(false);
    // const [showInstagram, setInstagramShow] = useState(false);

    useEffect(() => {
        axios.get(FooterJson)
            .then(res => setFooter(res.data))
            .catch(err => setFooter(err))
    }, [])

    if (!footer) return null;

    return (
        <>
            <footer className="row">
                {footer.map((post) => (
                    <div className="footer-page" data-aos="zoom-in-down">
                        <div className="left">
                            <img src={FerKonLogo} alt="Ferkon" />
                            <p>{post.paragraph}</p>
                        </div>
                        <div className="right">
                            {/* <a href={"?post__url=null"}>
                                <img
                                    onMouseMove={() => setYoutubeShow(true)}
                                    onMouseLeave={() => setYoutubeShow(false)}
                                    src={!showYoutube ? post["youtube-light"] : post["youtube-orange"]}
                                    alt="youtube"
                                />
                            </a> */}
                            <a href={"https://t.me/Muxammad78"}>
                                <img
                                    onMouseMove={() => setTelegramShow(true)}
                                    onMouseLeave={() => setTelegramShow(false)}
                                    src={!showTelegram ? post["telegram-light"] : post["telegram-orange"]}
                                    alt="telegram"
                                />
                            </a>
                            {/* <a href={"?post__url=null"}>
                                <img
                                    onMouseMove={() => setFacebookShow(true)}
                                    onMouseLeave={() => setFacebookShow(false)}
                                    src={!showFacebook ? post["facebook-light"] : post["facebook-orange"]}
                                    alt="facebook"
                                />
                            </a> */}
                            {/* <a href={"?post__url=null"}>
                                <img
                                    onMouseMove={() => setInstagramShow(true)}
                                    onMouseLeave={() => setInstagramShow(false)}
                                    src={!showInstagram ? post["instagram-light"] : post["instagram-orange"]}
                                    alt="instagram"
                                />
                            </a> */}
                            <a href="mailto:ferkon2001@mail.ru">
                                <MdOutlineMailOutline />
                            </a>
                        </div>
                    </div>
                ))}
            </footer>
        </>
    )
}