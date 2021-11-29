import { NotFound } from 'http-errors';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>

                <Route path="/home">
                  <Home></Home>
                </Route>

                <Route path="/contactme">
                  <Contact></Contact>
                </Route>

                
                <Route path="/web2">
                  <Contact></Contact>
                </Route>
                <Route path="/web3">
                  <Contact></Contact>
                </Route>

                <Route path="/*">
                  <NotFound></NotFound>
                </Route>

              </Switch>
              <Footer></Footer>
          </BrowserRouter>
    </div>
  );
}

export default App;
