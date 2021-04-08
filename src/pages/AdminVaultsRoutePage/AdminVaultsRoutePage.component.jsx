import React from 'react';
import { Switch, useRouteMatch, Route, } from 'react-router-dom';
import AdminVaultsPage from '../AdminVaultsPage/AdminVaultsPage.component';
import AdminViewVault from '../AdminViewVault/AdminViewVault.component';

const AdminVaultsRoutePage = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={AdminVaultsPage} />
      <Route exact path={`${path}/:id`} component={AdminViewVault} />
    </Switch>
  )
}

export default AdminVaultsRoutePage
