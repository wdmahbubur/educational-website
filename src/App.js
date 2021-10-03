import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* BrowserRouter as a Router minified for code organization  */}
      <Router>
        {/* Header Component */}
        <Header></Header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </main>
        <footer>

        </footer>
      </Router>
    </div>
  );
}

export default App;
