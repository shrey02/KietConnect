import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";
import { useStateValue } from './StateProvider';
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import List from './List';
import Profile from "./Profile";
import ListOfMembers from "./ListOfMembers";
import Resources from "./Resources";
import Feedgeek from "./feedgeek";
import FeedTed from "./FeedTed";
import FeedDance from "./FeedDance";
import FeedSae from "./FeedSae";
function App() {
  
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
    { !user ? (
   <Login/>
    ) : (

        <div className="app">
          <Router>
            <Route path="/">
          <Sidebar/>
          </Route>
            <Switch>
            <Route exact path="/">
          <Feed/>
          </Route>
          </Switch>
          <Switch>
            <Route exact path="/sports">
          <Feedgeek/>
          </Route>
          </Switch>
          <Switch>
            <Route exact path="/sae">
          <FeedSae/>
          </Route>
          </Switch>
          <Switch>
            <Route exact path="/dance">
          <FeedDance/>
          </Route>
          </Switch>
          <Switch>
            <Route exact path="/ted">
          <FeedTed/>
          </Route>
          </Switch>
          <Switch>
          <Route exact path="/List"><Profile/></Route>
            </Switch>
            <Switch>
          <Route exact path="/Explore"><List/></Route>
            </Switch>
            <Switch>
              <Route exact path="/MembersList"><ListOfMembers/></Route>
              </Switch>
              <Switch>
              <Route exact path="/resources"><Resources/></Route>
              </Switch>
              <Route path="/">
              <Widgets/>
          </Route>
          </Router>
        </div>
    )}

  </div>
  );
}

export default App;
