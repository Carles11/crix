import React, {Fragment} from "react";

import Routes from './Routes'
import Header  from './components/Header'

const App = () => {
  return (
      <Fragment>
        <Header />
        <Routes />
      </Fragment>
  );
};

export default App;
