import React, {useEffect, useRef} from 'react';
import Nav from "../../components/Header/Nav/Nav";
import {sanityClient, urlFor} from "../../sanity";
import {GetStaticPaths, GetStaticProps} from "next";
import Button from "../../components/Button/Button";
import {CiShoppingCart} from "react-icons/ci";
import {useDispatch} from "react-redux";
import {toggleAffinityModal} from "../../redux/features/modalSlice";
import {addToBasket} from "../../redux/features/basketSlice";
import toast from "react-hot-toast";
import Image from "next/image";
import {BsStars} from "react-icons/bs";
import CTA from "../../components/CTA/CTA";
import Modal from "../../components/Modal/Modal";
import Layout from "../../components/Layout/Layout";
import {Head} from "../../seo/Head/Head";
import Preloader from "../../components/Preloader/Preloader";
import {gsap} from "gsap";

interface Props {
    product: Product;
}

function PageTransition({product} : Props) {

    //create refs for our DOM elements
    let infoRef = useRef(null)

    let info = infoRef.current;

    useEffect(() => {

        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

        tl.to(".lightCyan-slider", {
            x: "-10%",
            duration: 1,
        });

        tl.to(
            ".persianGreen-slider",
            {
                x: "-20%",
                duration: 1.5,
            },
            "-=1"
        );

        tl.to(
            ".white-slider",
            {
                x: "-30%",
                duration: 1.5,
            },
            "-=1"
        );

        tl.to(".hide", {
            x: "0%",
            duration: 2,
            opacity: 1,
        });

        tl.to(".preloader", {
            x: "200%",
            duration: 3,
        });

        tl.fromTo(
            "nav",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
            },
            "-=2"
        );

        tl.fromTo(
            ".hero-content",
            {
                opacity: 0,
                y: -20,
            },
            {
                opacity: 1,
                duration: 1,
                y: 0,
            },
            "-=1.5"
        );


    }, []);

    return (
        <div className='preloader ' >
            <div className="prl-logo">
                <h1 className="hide"> <sup>{product.title}</sup> </h1>
            </div>
            <div className="lightCyan-slider"></div>
            <div className="persianGreen-slider"></div>
            <div className="white-slider"></div>
        </div>
    );
}

function Product({product} : Props ) {

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

    return(
    <div>
        <Head title={`Aster - ${product.title}`} description={product.title}/>

        <PageTransition product={product}/>

        <Layout>
            <Modal/>

            <div className="product-page">
                <div className="product-page-description">
                    <div></div>
                    <div className="star-1">
                        <BsStars/>
                    </div>
                    <h1>{product.title}</h1>
                    <p>
                        Nourish your skin with fan-favorite SPF body products. Shop limited-edition kits, special launches and more, only available here.
                    </p>
                    <h4>${product.price}</h4>

                    <div onClick={
                        (ev) => {
                            ev.stopPropagation();
                            toggleBasketModal();
                            addItemToBasket();
                        }}
                    >
                        <Button
                            title='Add to Cart'
                            icon={<CiShoppingCart/>} />

                    </div>
                    <span className='quote'>Buy Aster skincare set products separately</span>
                </div>
                <div className="product-page-image">
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
            </div>

            <CTA/>
        </Layout>
        <Nav/>

    </div>
)
;
}


export const getStaticPaths : GetStaticPaths = async() => {
    const query = `
    *[_type == 'product'] {
        _id,
        slug{
            current
        }
    }`;

    const products = await sanityClient.fetch(query);

    const paths = products.map((product : Product) => ({
        params: {
            slug: product.slug.current,
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    }
}


export const getStaticProps: GetStaticProps = async({params}) => {

    const query = `  *[_type == "product" && slug.current == $slug][0] { 
        _id,
  ...
    }`
    ;


    const product = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if(!product){
        return {
            notFound: true
        }
    }
    return {
        props: {
            product,
            revalidate: 2, // update cache after 2 sec
        }
    }
}

export default Product