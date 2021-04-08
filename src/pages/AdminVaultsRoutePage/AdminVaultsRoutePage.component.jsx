import React from 'react';
import { Switch, useRouteMatch, Route, } from 'react-router-dom';
import AdminVaultsPage from '../AdminVaultsPage/AdminVaultsPage.component';

const AdminVaultsRoutePage = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path} component={AdminVaultsPage} />
    </Switch>
  )
}

export default AdminVaultsRoutePage
