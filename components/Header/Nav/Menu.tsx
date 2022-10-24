import React, {useEffect, useRef, useState} from 'react';
import { gsap } from "gsap";
import Link from "next/link";
import {
    menuShow,
    menuHide,
    textIntro,
    staggerLinks,
    hoverLink,
    hoverExit
} from "../../../components/animations/gsap/Animate";
import {BiSearch, BiShoppingBag, BiUser} from "react-icons/bi";

// @ts-ignore
function Menu({state}) {

    //create refs for our DOM elements
    let menuWrapper = useRef(null)
    let show1 = useRef(null)
    let show2 = useRef(null)

    // Colors
    const colors = {
        Sea: '#fff',
        Sand: '#c5b97e',
        Peach: '#F8A477',
        Tea : '#A1C4E4FF',
        Miniom: '#d1bf38'
    }

    const [color, setColor] = useState(colors.Sea);

    useEffect(() => {
        setColor(color)
    }, []);

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.
            {/*@ts-ignore*/}
            menuHide(show2, show1);
            // Set menu to display none
            gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
            //Allow menu to have height of 100%
            gsap.to([show1, show2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            {/*@ts-ignore*/}
            menuShow(show1, show2);
        }
    }, [state]);

    return (
        <div>
            {/*@ts-ignore*/}
            <div ref={(el) => (menuWrapper = el)} className='menu-wrapper'>
                {/*@ts-ignore*/}
                <div ref={(el) => (show1 = el)}
                    className="menu-secondary-background-color"
                ></div>
                {/*@ts-ignore*/}
                <div className="menu" ref={(el) => (show2 = el)} style={{backgroundColor : color}}>
                    <ul className="menu__items">
                        <li
                            onMouseEnter={e => setColor(colors.Sand)}
                            onMouseLeave={e => setColor(colors.Sea)}
                            className="menu__item">
                            <Link href={'#'} >Men</Link></li>
                        <li
                            onMouseEnter={e => setColor(colors.Peach)}
                            onMouseLeave={e => setColor(colors.Sea)}
                            className="menu__item" >
                            <Link href={'#'}>Women</Link>
                        </li>
                        <li
                            onMouseEnter={e => setColor(colors.Tea)}
                            onMouseLeave={e => setColor(colors.Sea)}
                            className="menu__item" >
                            <Link href={'#'}>Accessories</Link>
                        </li>
                        <li
                            onMouseEnter={e => setColor(colors.Miniom)}
                            onMouseLeave={e => setColor(colors.Sea)}
                            className="menu__item" >
                            <Link href={'#'}>Beauty</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Menu;