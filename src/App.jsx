import React, { Fragment } from "react";
import { Helmet } from "react-helmet";


import Routes from './Routes'

const DIC = getDictionary()

const App = () => {
  return (
      <Fragment>
        <Helmet
          titleTemplate={`%s | ${DIC.NAME} - ${DIC.DESCRIPTION}`}
          defaultTitle={`${DIC.NAME} - ${DIC.DESCRIPTION}`}
        >
          <meta name="description" content={DIC.DESCRIPTION} />
        </Helmet>

        <Routes />
      </Fragment>
  );
};

export default App;
