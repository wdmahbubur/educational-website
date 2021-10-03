import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import About from './Components/About/About';

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
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
          </Switch>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </Router>
    </div>
  );
}

export default App;
