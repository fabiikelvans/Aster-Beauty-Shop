import '../styles/scss/main.scss'
import type { AppProps } from 'next/app'

import 'swiper/scss';
import 'swiper/scss/navigation';
import {Provider} from "react-redux";
import {persistor, store} from "../redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {Toaster} from "react-hot-toast";
import {GoogleOAuthProvider} from "@react-oauth/google";

function MyApp({ Component, pageProps, router }: AppProps) {

    return  (
        <Provider store={store}>
            <Toaster/>
            <PersistGate loading={null} persistor={persistor}>
                <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
                <Component {...pageProps} />
                </GoogleOAuthProvider>
            </PersistGate>
        </Provider>
      )

}

export default MyApp
