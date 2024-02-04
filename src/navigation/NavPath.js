import React from 'react';
import AppLayout from '../layout/AppLayout';
import LazyComponent from './LazyComponent';


export const NavPath = {

    home: {
        title: "home",
        path: "/",
        element: (
            <AppLayout>
                <LazyComponent path="home/Home" />
            </AppLayout>
        ),
        description: "home-Page",
    },
    about: {
        title: "about",
        path: "/about",
        element: (
            <AppLayout>
                <LazyComponent path="about/About" />
            </AppLayout>
        )
    },
    contact: {
        title: "contact",
        path: "/contact",
        element: (
            <AppLayout>
                <LazyComponent path="contact/Contact" />
            </AppLayout>
        ),
        description: "contact-Page",
    },
}


