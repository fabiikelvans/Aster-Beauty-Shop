import React, {useEffect, useState} from 'react';
import {Head} from "../seo/Head/Head";
import Link from "next/link";
import {useRouter} from "next/router";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import Button from "../components/Button/Button";
import {GetServerSideProps} from "next";
import {fetchLineItems} from "../utils/fetchLineItems";
import {useSession} from "next-auth/react";
import Currency from "react-currency-formatter";


interface Props {
    products: StripeProduct[] | null;
}

function Success({ products }: Props) {

    console.log(products);
    const router = useRouter();
    const { session_id } = router.query;
    const [mounted, setMounted] = useState(false);
    const [showOrderSummary, setShowOrderSummary] = useState(false);
    // @ts-ignore
    const subtotal = products.reduce(
        (acc, product) => acc + product.price.unit_amount / 100,
        0
    );
    // const { data: session } = useSession();

    const { width, height } = useWindowSize()

    useEffect(() => {
        setMounted(true);
    }, []);


    // @ts-ignore
    // @ts-ignore
    return (
        <div >
            <Head title='Aster | Success' description='Aster is an online beauty and cosmetics shop'/>

            <Confetti
                width={width}
                height={height}
            />

            <div className='success'>
                <div className="success__left">
                    <div className="success__left-logo">
                       <Link href={'/'}>
                           Aster
                       </Link>
                    </div>

                    <div className="success__left-thanks">
                        <div className="text">Thank you</div>
                        <div className="number">Order <span>#dfL45f</span></div>
                    </div>

                    <div className="success__left-order">
                        <div>
                            <h4>Your order is confirmed</h4>
                            <p>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                We've accepted your order, and we're getting it ready. Come back to this page for updates on your shipment status.
                            </p>
                        </div>

                        <div>
                            <h5>Other tracking number:</h5>
                            <p>CNB21441622</p>
                        </div>
                    </div>

                    <div className="success__left-update">
                        <h4>Order updates</h4>
                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            You'll get shipping and delivery updates by email and text.
                        </p>
                    </div>

                    <div className="success__left-contact">
                        <div>
                            Need help? <span>Contact us</span>
                        </div>

                    </div>

                </div>

                <div className="success__right">
                    <div className="success__right-title">
                        <h1>Order Summary</h1>
                    </div>

                    <div className="success__right-body">
                                <div className="success__product">
                                    {/*@ts-ignore*/}
                                    {products.map((product) => (
                                        <div key={product.id}>
                                    <div className="success__product-title">
                                        <h2>{product.description}</h2>
                                        <div className="amount">
                                            <Currency
                                                quantity={product.price.unit_amount / 100}
                                                currency={product.currency}
                                            />
                                        </div>
                                    </div>

                                        </div>
                                        ))}

                                    <hr/>
                                    <div className="success__product-subtotal">
                                        <p className='text-1'>Subtotal</p>
                                        <p className='amount'>
                                            <Currency quantity={subtotal}/>
                                        </p>
                                    </div>
                                    <div className="success__product-discount">
                                        <p className='text-1'>Discount</p>
                                        <p className='amount'>$0.00</p>
                                    </div>

                                    <div className="success__product-shipping">
                                        <p className='text-1'>Shipping</p>
                                        <p className='amount'>
                                            <Currency quantity={20} currency='USD' />
                                        </p>
                                    </div>

                                    <hr/>
                                    <div className="success__product-total">
                                        <p className='total'>Total</p>
                                        <p className='total-amount'>
                                            USD {' '}
                                            <span className=''>
                                            <Currency quantity={ subtotal + 20} />
                                        </span>
                                        </p>
                                    </div>
                                </div>



                    </div>

                    {mounted && (
                        <Button
                            title='Continue Shopping'
                            onClick={() => router.push('/')}
                        />
                    )}

                </div>
            </div>
        </div>
    );
}

export default Success;

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {

    const sessionId = query.session_id as string;
    const products = await fetchLineItems(sessionId)

    if (!products) return { props: null, notFound: true };

    else return {
        props: {
            products,
        }
    }
}