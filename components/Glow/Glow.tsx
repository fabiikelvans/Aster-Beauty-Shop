import React, {Suspense} from 'react';
import { BsStars} from "react-icons/bs";
import Image from "next/image";

function Glow() {
    return (
        <div className='glow'>
            <div className="glow__text">
                <div className="star-1">
                    <BsStars/>
                </div>

                <h1>Glow With <br/> Your Own Way!</h1>

                <p>
                    Nourish your skin with fan-favorite SPF body products.
                    Shop limited-edition kits, special launches and more,
                    only available here.
                </p>

                <button className='glow__btn'>
                    <span>Buy Now</span>
                </button>
            </div>

            <div className="glow__image">
                <div className="glow__image-wrapper">
                    <Image
                        className='image'
                        src='https://images.unsplash.com/photo-1555820585-c5ae44394b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        alt="Image"
                        layout={"fill"}
                        objectFit={'cover'}
                    />
                </div>
            </div>

        </div>
    );
}

export default Glow;