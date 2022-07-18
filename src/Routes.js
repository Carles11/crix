import React from 'react';
import { Routes, Route } from "react-router-dom";

import Landing from "./views/Landing";
import Services from "./views/Services";
import Contact from "./views/Contact";
import AboutUs from "./views/AboutUs";
import Datenschutzerklaerung from './views/Datenschutzerklaerung';
import Impressum from './views/Impressum';

const AllRoutes = () => {
    return (
        <Routes onChange={() => window.scrollTo(0, 0)}>
            <Route exact path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/datenschutzerklaerung" element={<Datenschutzerklaerung />} />
            <Route path="/impressum" element={<Impressum />} />
        </Routes>
    )
}

export default AllRoutes;
