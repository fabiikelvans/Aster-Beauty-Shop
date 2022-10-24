import React from 'react';
import Image from "next/image";
import {BsArrowRight, BsStars} from "react-icons/bs";

function Features() {
    return (
        <div className='feature'>
            <div className="feature__images">
                <div className="feature__images-left">
                    <div className="img-1">
                        <Image
                        className='image'
                        src='https://images.unsplash.com/photo-1597143720062-de84fcf7a227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
                        alt="Image"
                        layout={"fill"}
                        objectFit={'cover'}
                    />
                    </div>

                </div>

                <div className="feature__images-right">
                    <div className="img-2">
                        <Image
                            className='image'
                            src='https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80'
                            alt="Image"
                            layout={"fill"}
                            objectFit={'cover'}
                        />
                    </div>

                    <div className="img-3">
                        <Image
                            className='image'
                            src='https://images.unsplash.com/photo-1597143722151-6c041d7b2901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            alt="Image"
                            layout={"fill"}
                            objectFit={'cover'}
                        />
                    </div>
                </div>
            </div>

            <div className="feature__text">

                <div className="star-1">
                    <BsStars/>
                </div>

                <h1>Healthy Skin Wildly You!</h1>

                <p>
                    Nourish your skin with fan-favorite SPF body products.
                    Shop limited-edition kits, special launches and more,
                    only available here.
                </p>

                <button className='feature__btn'>
                    <span>Read More</span>
                    <BsArrowRight/>
                </button>

            </div>
        </div>
    );
}

export default Features;