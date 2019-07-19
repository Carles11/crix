import React, { Fragment } from "react";
import { hot } from 'react-hot-loader/root'

import Routes from './Routes'

const App = () => {
  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
};

export default hot(App);
