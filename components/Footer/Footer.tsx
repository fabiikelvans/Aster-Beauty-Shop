import React from 'react';
import Link from "next/link";
import {SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin} from "react-icons/sl";


function Footer() {
    return (
        <div className='footer'>
            <div className="footer__top">
                <div>
                    <h6 className='tagline'>Make your skin shine</h6>
                    <h1 className='logo'>Aster.</h1>
                </div>

                <div>
                    <p>
                        Nourish your skin with fan-favorite SPF body products. Shop limited-edition kits, special launches and more, only available here.
                    </p>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__bottom-left">
                    <div className="footer__bottom-left_menu">
                        <h4>Menu</h4>
                        <ul>
                            <li><Link href='/'>Men</Link></li>
                            <li><Link href='/'>Women</Link></li>
                            <li><Link href='/'>Accessories</Link></li>
                            <li><Link href='/'>Beauty</Link></li>
                        </ul>
                    </div>

                    <div className="footer__bottom-left_support">
                        <h4>Support</h4>
                        <ul>
                            <li><Link href='/'>Terms & Conditions</Link></li>
                            <li><Link href='/'>Privacy Policy</Link></li>
                            <li><Link href='/'>Legal Mention</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom-right">
                    <div className="icon">
                    <Link href='/'>
                        <SlSocialFacebook/>
                    </Link>
                    </div>

                    <div className="icon">
                    <Link href='/'>
                        <SlSocialInstagram/>
                    </Link>
                    </div>

                    <div className="icon">
                        <Link href='/'>
                            <SlSocialLinkedin/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;