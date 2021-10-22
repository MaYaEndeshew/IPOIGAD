import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import Nav from "./components/Navbar/Navbar"
import About from "./pages/About/About"
import Single from "./pages/Single/Single"
import Write from "./pages/Write/Write"
import Settings from "./pages/Settings/Settings"
import Blog from "./pages/Blog/Blog"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Footer from "./components/Footer/Footer"
import { useContext } from "react";
import {Context} from "./context/Context"

function App() {
  const {user}= useContext(Context);
  return (
    <Router>
     <Nav/>
     <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route  path="/about">
          <About />
        </Route>
        <Route path="/register">
            {user ? <Home/> : <Register />}
        </Route>
        <Route path="/login">
            {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
            {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
            {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/post/:postId">
            <Single/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
