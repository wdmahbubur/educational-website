import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      {/* BrowserRouter as a Router minified for code organization  */}
      <Router>
        {/* Header Component */}
        <Header></Header>
        <main>
          <Switch>
            {/* Open website or type /home after website domain then load home component */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            {/* /courses after website domain then load Courses component */}
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            {/* /about after website domain then load about component */}
            <Route path="/about">
              <About></About>
            </Route>
            {/* /contact after website domain then load contact component */}
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            {/* open any wrong url then show not found */}
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </main>
        {/* Default website footer */}
        <footer>
          <Footer></Footer>
        </footer>
      </Router>
    </div>

  );
}

export default App;
