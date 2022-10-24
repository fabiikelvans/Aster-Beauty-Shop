import React, {useCallback, useRef} from 'react';
import Image from "next/image";
import Link from "next/link";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {CiShoppingCart} from "react-icons/ci";

// Redux
import {modalOpen, toggleAffinityModal} from "../../redux/features/modalSlice";
import {useSelector, useDispatch} from "react-redux";
import {addToBasket} from "../../redux/features/basketSlice";
import toast from "react-hot-toast";
import {urlFor} from "../../sanity";
import Button from "../Button/Button";

interface Props {
    product: Product
}


function Product({ product } : Props) {

    const dispatch = useDispatch();

    // Toggle Modal
    const toggleBasketModal = () => {
        dispatch(toggleAffinityModal())
    }

    // Add Item to Basket
    const addItemToBasket = () => {
        dispatch(addToBasket(product));

        toast.success(`${product.title} added to basket`, {
            position: "bottom-center",
        })
    }

    return (
        <div className='product'>
            <div className="product__image">
                <div className="image-wrapper">
                    <Image
                        className='image'
                        src={urlFor(product.image[0]).url()}
                        alt={product.title}
                        layout={"fill"}
                        objectFit={'cover'}
                    />
                </div>
            </div>
            <div className="product__details">
                <div>
                    <div className="product__details-name">
                        {product.title}
                    </div>

                    <div className="product__details-price">
                        ${product.price}
                    </div>
                </div>

                <div>

                    <div className="product__details-category">

                    </div>

                    <div className="product__details-cart"
                         onClick={
                             (ev) => {
                                 ev.stopPropagation();
                                 toggleBasketModal();
                                 addItemToBasket();
                             }}
                    >
                        <Button icon={<CiShoppingCart/>} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;