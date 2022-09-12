import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v1 as uuid } from "uuid";
import { config } from "react-spring";
import image from "./image/1.jpg";
import image1 from "./image/2.jpg";
import image2 from "./image/3.jpg";
import image3 from "./image/4.jpg";
import image4 from "./image/5.jpg";
import image5 from "./image/6.jpg";
import image6 from "./image/7.jpg";
import image7 from "./image/8.jpg";
import image8 from "./image/9.jpg";
export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle
    };

    slides = [
        {
            key: uuid(),
            content: <img src={image} alt="1" />
        },
        {
            key: uuid(),
            content: <img src={image1} alt="2" />
        },
        {
            key: uuid(),
            content: <img src={image2} alt="3" />
        },
        {
            key: uuid(),
            content: <img src={image3} alt="4" />
        },
        {
            key: uuid(),
            content: <img src={image4} alt="5" />
        },
        {
            key: uuid(),
            content: <img src={image5} alt="6" />
        },
        {
            key: uuid(),
            content: <img src={image6} alt="7" />
        },
        {
            key: uuid(),
            content: <img src={image7} alt="8" />
        },
        {
            key: uuid(),
            content: <img src={image8} alt="9" />
        }
    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    render() {
        return (
            <div style={{ width: "80%", height: "500px", margin: "20px auto" }} data-aos="zoom-in">
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />
            </div>
        );
    }
}
