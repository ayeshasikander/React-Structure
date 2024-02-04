import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import React from 'react';
import Home from '../screens/home/Home';
import About from '../screens/about/About';
import Contact from '../screens/contact/Contact';
import ErrorScreen from '../screens/errorScreen/ErrorScreen';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';

function Routing() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='*' element={<ErrorScreen />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
};

export default Routing