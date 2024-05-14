import React from 'react';
import styles from './Stages.module.css';
import cn from "classnames";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Stages(props) {

    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Swiper
                    style={{overflow: "visible", paddingBottom: "60px"}}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={150}
                    slidesPerView={3}
                    navigation
                    pagination={{
                        clickable: true,

                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {props.data.map(cards => (
                        <SwiperSlide>
                            <Card key={cards.id} {...cards} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </>

    );
}

export default Stages;
