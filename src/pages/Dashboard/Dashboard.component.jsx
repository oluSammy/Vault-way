import React from 'react'
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import DashboardHome from './../DashboardHome/DashboardHome.component';
import Vault from './../Vault/Vault.component';

const Dashboard = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <h1>Nav bar</h1>
      <h1>Side bar</h1>
      <Switch>
        <Route exact path={path} component={DashboardHome} />
        <Route path={`${path}/vault`} component={Vault} />
      </Switch>
    </div>
  )
}

export default Dashboard
