import React, { Fragment } from 'react';
// import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

import List from 'containers/List';
import Details from 'containers/Details';

// const ListLoadableComponent = Loadable({
//   loader: () => import('containers/List' /* webpackChunkName: 'List' */),
//   loading() {
//     return <div>Loading...</div>;
//   },
// });

// const DetailsLoadableComponent = Loadable({
//   loader: () => import('containers/Details' /* webpackChunkName: 'Details' */),
//   loading() {
//     return <div>Loading...</div>;
//   },
// });

export default () => (
  <Fragment>
    <Route exact path="/" component={List} />
    <Route path="/pokemon/:name" component={Details} />
  </Fragment>
);
