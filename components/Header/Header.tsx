import React from 'react';
import Image from "next/image";

function Header() {
    return (
        <div className='header'>
            <div className="header__title">
               <div className="header__title-each">
                   <div className="text">Beyond</div>
                   <div className="image-wrapper">
                       <Image
                           className='image'
                           src='https://images.unsplash.com/photo-1564278252487-9af98186ca21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIzfHxiZWF1dHklMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                           alt="Image"
                           layout={"fill"}
                           objectFit={'cover'}
                       />
                   </div>
               </div>
               <div className="header__title-each">
                   <div className="image-wrapper">
                       <Image
                           className='image'
                           src='https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzMxfHxiZWF1dHklMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                           alt="Image"
                           layout={"fill"}
                           objectFit={'cover'}
                       />
                   </div>
                   <div className="text">Elegance</div>
               </div>
            </div>
            <div className="header__backdrop">
                Elegance
            </div>

            <div className="header__bottom">
                <div className="header__bottom-image">
                <Image
                    className='image'
                    src='/../public/images/header/model.png'
                    alt="Image"
                    layout={"fill"}
                    objectFit={'cover'}
                />
                </div>

                <div className="header__bottom-text">
                    <span>Ready to Glow</span>
                    <p>Use our super premium cosmetics and make your skin glow like any other celebrity!</p>
                </div>
            </div>
        </div>
    );
}

export default Header;