import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout() {
    

    return (
        <>
            <Header />
            <Outlet /> 
            {/* Header and footer don't change, Only the outlet can be changed as per the inner content */}
            <Footer />
        </>
    )
}

export default Layout;
