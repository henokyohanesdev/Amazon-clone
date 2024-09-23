import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import img1 from '../../assets/carousel-1.jpg';
import img2 from '../../assets/carousel-2.jpg';
import img3 from '../../assets/carousel-3.jpg';
import img4 from '../../assets/carousel-4.jpg';
import img5 from '../../assets/carousel-5.jpg';
import img6 from '../../assets/carousel-6.jpg';
import img7 from '../../assets/carousel-7.jpg';
import img8 from '../../assets/carousel-8.jpg';
import styles from './Carousel.module.css'

export default function CarouselEffect() {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <>
            <Carousel
                className={styles.carousel}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                transitionTime={500}
                swipeable={true}
                emulateTouch={true}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className={styles.arrowPrev}
                        >
                            <AiOutlineLeft />
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className={styles.arrowNext}
                        >
                            <AiOutlineRight />
                        </button>
                    )
                }
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="Carousel image" />
                    </div>
                ))}
            </Carousel>
            <div className={styles.carousel_shadow}></div>
        </>
    );
}
