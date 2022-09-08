import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './main.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const PartnorsJson = "./jsons/partnors.json";

export default function Partnors() {
    const [partnors, setPartnors] = useState([]);

    useEffect(() => {
        axios.get(PartnorsJson)
            .then(res => setPartnors(res.data))
            .catch(err => setPartnors(err))
    }, [])

    if (!partnors) return null;

    return (
        <>
            <div className="partnors row">
                {partnors.map((post) => (
                    <div className="partners" id='partners'>
                        <h1 className="title-page">{post.title}</h1>

                        {/* full version */}
                        <Swiper
                            className='partners-swiper'
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                        >
                            <SwiperSlide className='partors-slide'>
                                <img src={post.ruxsor} alt={post.ruxsorName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.gold} alt={post.goldName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.ruxsorRadio} alt={post.ruxsorRuxsorName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.madad} alt={post.madadName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.madad} alt={post.madadName} />
                            </SwiperSlide>
                        </Swiper>
                        {/* mobile version */}
                        <Swiper
                            className='partners-swiper-mobile'
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide className='partors-slide'>
                                <img src={post.ruxsor} alt={post.ruxsorName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.gold} alt={post.goldName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.ruxsorRadio} alt={post.ruxsorRuxsorName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.madad} alt={post.madadName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.madad} alt={post.madadName} />
                            </SwiperSlide>
                        </Swiper>
                        {/* planete version */}
                        <Swiper
                            className='partners-swiper partners-swiper-planete'
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={2}
                            navigation
                        >
                            <SwiperSlide className='partors-slide'>
                                <img src={post.ruxsor} alt={post.ruxsorName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.gold} alt={post.goldName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.ruxsorRadio} alt={post.ruxsorRuxsorName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.madad} alt={post.madadName} />
                            </SwiperSlide>
                            <SwiperSlide className='partors-slide'>
                                <img src={post.madad} alt={post.madadName} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                ))}
            </div>
        </>
    )
}