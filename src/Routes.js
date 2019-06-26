import React from 'react';
import { Switch, Route } from "react-router-dom";

import Landing from "./views/Landing";
import Services from "./views/Services";
import Contact from "./views/Contact";
import AboutUs from "./views/AboutUs";
import Datenschutzerklaerung from './views/Datenschutzerklaerung';
import Impressum from './views/Impressum';

const Routes = () => {
    return (
        <Switch onChange={() => window.scrollTo(0, 0)}>
            <Route exact path="/" component={Landing} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/datenschutzerklaerung" component={Datenschutzerklaerung} />
            <Route path="/impressum" component={Impressum} />
        </Switch>
    )
}

export default Routes;
