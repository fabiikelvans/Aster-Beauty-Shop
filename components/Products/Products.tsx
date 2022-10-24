import React, {useCallback, useRef} from 'react';
import Product from "./Product";
import {BsArrowLeftCircle, BsArrowRightCircle, BsStars} from "react-icons/bs";
import Link from "next/link";

// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from "swiper";
import {urlFor} from "../../sanity";
SwiperCore.use([Pagination]);

interface Props {
    products: Product[];
}

function Products({ products }: Props ) {

    // SLIDER SETTINGS
    const sliderRef = useRef<SwiperCore>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className='products'>
            <div className="products__header">
                <div className='products__header-title'>
                    <h1 >Our Best Sellers</h1>
                    <div className="star-1">
                        <BsStars/>
                    </div>
                </div>

                <div className="products__header-icons">
                    <div className="icon">
                        <BsArrowLeftCircle onClick={handlePrev} />
                    </div>

                    <div className="icon">
                        <BsArrowRightCircle  onClick={handleNext}/>
                    </div>
                </div>
            </div>

            <div className="products__wrapper">
                {/*@ts-ignore*/}
                <Swiper ref={sliderRef}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000 }}
                        navigation={false}
                        breakpoints={{
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                >
                    {
                        products.map((product: Product) => (
                            <SwiperSlide key={product._id}>
                        <Product
                            product={product}
                        />
                     </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    );
}

export default Products;