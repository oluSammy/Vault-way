import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import DashboardVault from './../DashboardVault/DashboardVault.component';
import VaultDetail from './../VaultDetail/VaultDetail.components';

const VaultsRoutesPage = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={DashboardVault} />
      <Route path={`${path}/:id`} component={VaultDetail} />
    </Switch>
  )
}

export default VaultsRoutesPage;
