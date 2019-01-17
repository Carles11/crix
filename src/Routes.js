import React from 'react'
import { Switch, Route } from "react-router-dom";

import Landing from "./views/Landing"
import Products from "./views/Product" 

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/products" component={Products} />
        </Switch>
     )
}

export default Routes;
