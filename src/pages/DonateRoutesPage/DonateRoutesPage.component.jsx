import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DonateHomePage from '../DonateHomePage/DonateHomePage.component';
import DonateForm from '../DonateForm/DonateForm.component';
import DonateThanksPage from '../DonateThanksPage/DonateThanksPage.component';


const DonateRoutesPage = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={DonateHomePage} />
      <Route exact path={`${path}/pay`} component={DonateForm} />
      <Route exact path={`${path}/thanks`} component={DonateThanksPage} />
    </Switch>
  )
}

export default DonateRoutesPage;
