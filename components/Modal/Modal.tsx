import React, {useEffect, useState} from 'react';
import {modalOpen, toggleAffinityModal} from "../../redux/features/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import {BsArrowLeftSquare} from "react-icons/bs";
import {useRouter} from "next/router";
import {selectBasketItems, selectBasketTotal} from "../../redux/features/basketSlice";
import {fetchPostJSON} from "../../utils/api-helper";
import Stripe from "stripe";
import getStripe from "../../utils/get-stripejs";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import Currency from "react-currency-formatter";
import {IoBagCheckOutline} from "react-icons/io5";
import {CiShoppingBasket} from "react-icons/ci";
import Link from "next/link";
import Button from "../Button/Button";
import {BiLock} from "react-icons/bi";


function Modal() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    // Show Cart Modal
    const showModal = useSelector(modalOpen)

    // Items added to the cart
    const items = useSelector(selectBasketItems);


    // Basket Total
    const basketTotal = useSelector(selectBasketTotal);

    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
        {} as { [key: string] : Product[] }
    );

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item._id] = results[item._id] || []).push(item)
            return results;
        }, {} as { [key: string] : Product[] });

        setGroupedItemsInBasket(groupedItems);
    }, [items]);



    // Create Checkout Session
    const createCheckoutSession = async () => {
        setLoading(true);

        const checkoutSession: Stripe.Checkout.Session =  await fetchPostJSON(
            "/api/checkout_sessions",
            {
                items: items,
            }
        );

        // Internal Server Error
        if((checkoutSession as any).statusCode === 500) {
            console.error((checkoutSession as any).message);
            return;
        }

        // Redirect to checkout
        const stripe = await getStripe()
        const { error } = await stripe!.redirectToCheckout({
            sessionId: checkoutSession.id,
        });
        console.warn(error.message);
        setLoading(false);
    }

    return (
        <>
            {showModal ? (
                <div className='modal'>
                    <div className="modal__backdrop"
                         onClick={() => dispatch(toggleAffinityModal())}
                    ></div>
                    <div className="modal__wrapper">

                        <div className="modal__header">
                            <div className="modal__header-icon"
                                 onClick={() => dispatch(toggleAffinityModal())}
                            >
                                <BsArrowLeftSquare/>
                            </div>
                            <div className="modal__header-logo">
                                <h2>Aster</h2>
                            </div>
                            <div></div>
                        </div>


                        <div className="modal__body">
                            <div className="modal__body-title">
                                <h3>Shopping Bag</h3>
                            </div>

                            {items.length > 0 ? (
                            <div>
                                <div className="modal__body-products disable-scrollbar">
                                    <div>
                                        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                                            <CheckoutProduct key={key} items={items} id={key}/>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal__body-total">
                                    <h2 className='text'>Subtotal</h2>
                                    <h2 className='number'><Currency quantity={basketTotal} currency='USD'/></h2>
                                </div>

                                <div className="">
                                    <Button title='Proceed to Checkout'
                                            icon={loading ? null : <BiLock/>}
                                            loading={loading}
                                            onClick={createCheckoutSession}
                                    />
                                </div>
                                <div className="modal__body-payments"></div>
                            </div>

                                )
                                : (

                            <div className='empty'>
                                <CiShoppingBasket className='empty-icon'/>
                                <h2 className='empty-title'>Your cart is empty</h2>
                                <p className='empty-text'>Please, add some products to checkout</p>

                                <Link href={'/'}>
                                    <Button title='Continue Shopping'
                                            onClick={() => dispatch(toggleAffinityModal())}
                                    />
                                </Link>
                            </div>

                                )}

                        </div>
                    </div>
                </div>
            ) : null}
        </>

    );
}

export default Modal;