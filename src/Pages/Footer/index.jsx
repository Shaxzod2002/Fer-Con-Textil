import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
const FooterJson = "./jsons/footer.json";

export default function Footer() {
    const [footer, setFooter] = useState([]);
    const [showYoutube, setYoutubeShow] = useState(false);
    const [showTelegram, setTelegramShow] = useState(false);
    const [showFacebook, setFacebookShow] = useState(false);
    const [showInstagram, setInstagramShow] = useState(false);

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
                    <div className="footer-page">
                        <div className="left">
                            <h4 className="title">{post.title}</h4>
                            <p>{post.paragraph}</p>
                        </div>
                        <div className="right">
                            <a href={"?post__url=null"}>
                                <img
                                    onMouseMove={() => setYoutubeShow(true)}
                                    onMouseLeave={() => setYoutubeShow(false)}
                                    src={!showYoutube ? post["youtube-light"] : post["youtube-orange"]}
                                    alt="youtube"
                                />
                            </a>
                            <a href={"?post__url=null"}>
                                <img
                                    onMouseMove={() => setTelegramShow(true)}
                                    onMouseLeave={() => setTelegramShow(false)}
                                    src={!showTelegram ? post["telegram-light"] : post["telegram-orange"]}
                                    alt="telegram"
                                />
                            </a>
                            <a href={"?post__url=null"}>
                                <img
                                    onMouseMove={() => setFacebookShow(true)}
                                    onMouseLeave={() => setFacebookShow(false)}
                                    src={!showFacebook ? post["facebook-light"] : post["facebook-orange"]}
                                    alt="facebook"
                                />
                            </a>
                            <a href={"?post__url=null"}>
                                <img
                                    onMouseMove={() => setInstagramShow(true)}
                                    onMouseLeave={() => setInstagramShow(false)}
                                    src={!showInstagram ? post["instagram-light"] : post["instagram-orange"]}
                                    alt="instagram"
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </footer>
        </>
    )
}