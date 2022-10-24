import React, {useState} from 'react';
import Link from "next/link";
import {BiSearch, BiShoppingBag, BiUser} from "react-icons/bi";
import {HiMenu, HiOutlineMenuAlt3} from "react-icons/hi";
import {CgClose} from "react-icons/cg";
import Menu from "./Menu";

// Redux Modal
import {modalOpen, toggleAffinityModal} from "../../../redux/features/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectBasketItems} from "../../../redux/features/basketSlice";
import {GoogleLogin} from "@react-oauth/google";



interface Props {
    dark?: boolean
    initial?: boolean | null;
}

function Nav( {dark} : Props) {

    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: <HiOutlineMenuAlt3 />
    });

    // State of our button
    const [disabled, setDisabled] = useState(false);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                // @ts-ignore
                initial: null,
                // @ts-ignore
                clicked: true,
                menuName: <CgClose/>
            });
        } else if (state.clicked === true) {
            setState({
                // @ts-ignore
                clicked: !state.clicked,
                menuName: <HiOutlineMenuAlt3 />
            });
        } else if (state.clicked === false) {
            setState({
                // @ts-ignore
                clicked: !state.clicked,
                menuName: <CgClose/>
            });
        }
    };

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };


    // Show Basket Modal
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    // Selected Items
    const items = useSelector(selectBasketItems);

    return (
        <div className={`nav ${dark ? 'nav-dark' : ''} `}>
                <div className="nav__logo">
                    <Link href={'/'}>Aster.</Link>
                </div>

                <div className="nav__links">
                    <ul>
                        <li><Link href={'/'}>Men</Link></li>
                        <li><Link href={'/'}>Women</Link></li>
                        <li><Link href={'/'}>Accessories</Link></li>
                        <li><Link href={'/'}>Beauty</Link></li>
                    </ul>
                </div>

                <div className="nav__account">
                    <div className="search">
                        <Link href={'/'}>
                        <BiSearch/>
                        </Link>
                    </div>
                    <div className="user">
                        <BiUser/>
                    </div>
                    <div className="cart"
                         onClick={() => dispatch(toggleAffinityModal())}
                    >
                        <BiShoppingBag/>
                        {items.length > 0 && (
                        <div className='cart-count'>
                            <p>{items.length}</p>
                        </div>
                        )}
                    </div>
                </div>

            {/*Menu Component*/}
            <div className="nav__menu">
                <Menu state={state}/>
            </div>

            <button className="nav__toggle" disabled={disabled} onClick={handleMenu}>
                <div className='nav__toggle-icon'>
                    {state.menuName}
                </div>
            </button>

        </div>
    );
}

export default Nav;