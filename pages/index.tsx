import type {GetServerSideProps, NextPage} from 'next'
import Image from 'next/image'
import Layout from "../components/Layout/Layout";
import {Head} from "../seo/Head/Head";
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import Marquee from "../components/Marquee/Marquee";
import Glow from "../components/Glow/Glow";
import CTA from "../components/CTA/CTA";
import Products from "../components/Products/Products";
import {fetchProducts} from "../utils/fetchProducts";
import {fetchCategories} from "../utils/fetchCategories";
import Modal from "../components/Modal/Modal";
import Preloader from "../components/Preloader/Preloader";
import React, {useEffect, useRef, useState} from "react";

interface Props {
    categories: Category[];
    products: Product[];
}


const Home = ({ products } : Props) => {

    const ref = useRef(null);
    const [preloader, setPreload] = useState(true);

    useEffect(() => {
        if (!preloader && ref) {
            if (typeof window === "undefined" || !window.document) {
                return;
            }
        }
    }, [preloader]);


    const [timer, setTimer] = React.useState(3);

    const id = React.useRef(null);

    const clear = () => {
        {/*@ts-ignore*/}
        window.clearInterval(id.current);
        setPreload(false);
    };

    React.useEffect(() => {
        {/*@ts-ignore*/}
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    React.useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    if (typeof window === "undefined" || !window.document) {
        return null;
    }



    return (
    <div >
      <Head title='Aster Beauty Shop' description='Aster is an online beauty and cosmetics shop'/>

        <Preloader/>
      <Layout>
          <Header/>
          <Features/>
          <Marquee/>
          <Glow/>
          <Products products={products}/>
          <CTA/>
          <Modal/>
      </Layout>
    </div>
  )
}

export default Home


// BACKEND CODE

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const categories = await fetchCategories();
    const products = await fetchProducts();
    // const session = await getSession(context);

    return {
        props: {
            categories,
            products,
            //session,
        },
    }
}