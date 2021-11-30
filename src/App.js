import { NotFound } from 'http-errors';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Project1 from './Pages/Project1/Project1';
import Project2 from './Pages/Project2/Project2';
import Project3 from './Pages/Project3/Project3';
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

                <Route path="/blogs">
                  <Blogs></Blogs>
                </Route>

                <Route path="/contactme">
                  <Contact></Contact>
                </Route>

                <Route path="/web1">
                  <Project1></Project1>
                </Route>

                <Route path="/web2">
                  <Project2></Project2>
                </Route>

                <Route path="/web3">
                  <Project3></Project3>
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
