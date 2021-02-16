import { Route, Switch } from 'react-router-dom';
import Home from './pages/Homepage/Home.component';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
