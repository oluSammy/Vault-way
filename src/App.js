import { Route, Switch } from 'react-router-dom';
import Home from './pages/Homepage/Home.component';
import About from './pages/About/About.component';
import Plans from './pages/Plans/Plans.component';
import Login from './pages/login/Login.component';
import Signup from './pages/Signup/Signup.component';
import Faq from './pages/Faq/Faq.components';
import Dashboard from './pages/Dashboard/Dashboard.component';
import DonateRoutesPage from './pages/DonateRoutesPage/DonateRoutesPage.component';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard.component';



function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/plans" component={Plans} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/Faq" component={Faq} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/donate/:id" component={DonateRoutesPage} />
    </Switch>
  );
}

export default App;
