import React from 'react';
import styles from './Stages.module.css';
import cn from "classnames";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Stages(props) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className={cn(styles.wrap, props.className)}>
                <Carousel
                    responsive={responsive}
                    ssr={true}
                    infinite={false}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {props.data.map(cards => (
                        <Card key={cards.id} {...cards} />
                    ))}
                </Carousel>
            </div>
        </>

    );
}

export default Stages;
