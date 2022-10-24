import React, {ReactNode} from 'react';
import Nav from "../Header/Nav/Nav";
import Footer from "../Footer/Footer";


type Props = {
    children?: ReactNode,
    dark?: boolean
}


function Layout({ children , dark } : Props) {
    return (
        <div className='noise'>
            <Nav dark={dark}/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;