import React, { useState, useEffect } from 'react';
import styles from './Stages.module.css';
import cn from "classnames";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Stages(props) {

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

const navigation={
    prevEl: ".prevEl",
    nextEl: ".nextEl",
}

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };


    return (
        <>
            <div id="stages" className={cn(styles.wrap, props.className)}>
                <Swiper
                    style={{paddingLeft:"19%",  paddingBottom: "60px"}}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={3}

                    navigation={
                        navigation
                    }
                    pagination
                    breakpoints={{


                        1440: {
                            slidesPerView: 2,
                            spaceBetween: -300,
                        },

                        1920: {
                            slidesPerView: 3,
                            spaceBetween: -280,
                        },
                        2560: {
                            slidesPerView: 4,
                            spaceBetween: -200,
                        },

                    }}
                    onSwiper={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                >

                    {props.data.map(cards => (
                        <SwiperSlide key={cards.id}>
                            {({ isActive, isPrev, isNext }) => (
                                <Card {...cards} isActive={isActive} isPrev={isPrev} isNext={isNext} />
                            )}
                        </SwiperSlide>
                    ))}
                    <div style={{

                        display: "flex",
                        gap:"347px",
                        alignItems: "center",
                        top: "42%",
                        left:"18%",
                        justifyContent: "space-between",
                        position: "absolute",
                        zIndex: 1
                    }}>


                        <svg className="prevEl"
                             style={{border: "1px solid #D4D5D9", borderRadius: "60px", padding: "12px",  transform: "scaleX(-1)",  opacity: isBeginning ? 0.5 : 1,
                                 pointerEvents: isBeginning ? "none" : "auto"}} width="18"
                             height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2.4L7.33333 0L19 12L7.33333 24L5 21.6L14.3333 12L5 2.4Z" fill="#00071F"/>
                        </svg>

                        <svg className="nextEl"
                             style={{border: "1px solid #D4D5D9", borderRadius: "60px", padding: "12px",  opacity: isEnd ? 0.5 : 1,
                                 pointerEvents: isEnd ? 'none' : 'auto',}} width="18"
                             height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2.4L7.33333 0L19 12L7.33333 24L5 21.6L14.3333 12L5 2.4Z" fill="#00071F"/>
                        </svg>


                    </div>
                </Swiper>

            </div>

        </>

    );
}

export default Stages;
