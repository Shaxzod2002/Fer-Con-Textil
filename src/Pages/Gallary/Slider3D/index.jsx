import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v1 as uuid } from "uuid";
import { config } from "react-spring";
import image from "./image/1.png";
import image1 from "./image/2.png";
import image2 from "./image/3.png";
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
        }
    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    render() {
        return (
            <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
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
