import React from 'react'
import { Switch, Route } from "react-router-dom";

import Landing from "./views/Landing"
import Services from "./views/Services" 
import Contact from "./views/Contact"
import AboutUs from "./views/AboutUs"

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/about-us" component={AboutUs} />
        </Switch>
     )
}

export default Routes;
