import React from 'react';
import {useDispatch} from "react-redux";
import {addToBasket, removeAllFromBasket, removeFromBasket} from "../../redux/features/basketSlice";
import toast from "react-hot-toast";
import Image from "next/image";
import {urlFor} from "../../sanity";
import { IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import { BiTrash} from "react-icons/bi";

import Currency from 'react-currency-formatter';


interface Props {
    items: Product[];
    id: string;
}

function CheckoutProduct({ items, id } : Props) {

    const dispatch = useDispatch()

    const product = items[0];

    // Add Item to Basket
    const addItemToBasket = () => {
        dispatch(addToBasket(product));

        toast.success(`${product.title} added to basket`, {
            position: "bottom-center",
        })
    }

    // Remove Item from Basket
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));

        toast.error(`${items[0].title} removed from basket`, {
            position: "bottom-center",
        })
    }

    // Remove Items from Basket
    const removeAllItemsFromBasket = () => {
        dispatch(removeAllFromBasket({ id }));

        toast.error(`Items removed from basket`, {
            position: "bottom-center",
        })
    }

    return (
        <div className='modal__product'>
            <div className="modal__product-image">
                <Image
                    src={urlFor(items[0].image[0]).url()}
                    layout='fill'
                    alt={items[0].title}
                    objectFit='cover'
                />
            </div>

            <div className="modal__product-item">{items[0].title}</div>

            <div className="modal__product-quantity">
                <IoRemoveCircleOutline className='q-icon'
                                 onClick={removeItemFromBasket}
                />
                <div className='q-no'>{items.length}</div>
                <IoAddCircleOutline className='q-icon'
                                onClick={addItemToBasket}
                />
            </div>

            <div className="modal__product-price">
                <h4>
                    <Currency
                        quantity={items.reduce((total, item) => total + item.price, 0)}
                        currency="USD"
                    />
                </h4>
            </div>

            <div className="modal__product-remove">
                {/*Remove Item from Basket*/}
                <BiTrash className='r-icon' onClick={removeAllItemsFromBasket}/>

            </div>
        </div>
    );
}

export default CheckoutProduct;