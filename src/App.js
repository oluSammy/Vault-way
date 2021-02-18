import { Route, Switch } from 'react-router-dom';
import Home from './pages/Homepage/Home.component';
import About from './pages/About/About.component';
import Plans from './pages/Plans/Plans.component';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/plans" component={Plans} />
    </Switch>
  );
}

export default App;
