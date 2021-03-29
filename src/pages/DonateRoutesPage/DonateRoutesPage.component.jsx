import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DonateHomePage from '../DonateHomePage/DonateHomePage.component';


const DonateRoutesPage = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={DonateHomePage} />
    </Switch>
  )
}

export default DonateRoutesPage;
