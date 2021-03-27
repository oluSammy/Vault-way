import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import DashboardVault from './../DashboardVault/DashboardVault.component';
import VaultDetail from './../VaultDetail/VaultDetail.components';
import CreateVaultSuccess from '../CreateVaultSuccess/CreateVaultSuccess.component';
import FundMyVault from '../FundMyVault/FundMyVault.component';
import QuickVault from '../QuickVault/QuickVault.component';

const VaultsRoutesPage = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={DashboardVault} />
      <Route path={`${path}/success`} component={CreateVaultSuccess} />
      <Route path={`${path}/fundmyvault`} component={FundMyVault} />
      <Route path={`${path}/quickvault`} component={QuickVault} />
      <Route path={`${path}/:id`} component={VaultDetail} />
    </Switch>
  )
}

export default VaultsRoutesPage;
