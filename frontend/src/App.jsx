import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/post/:_id" component={Post} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
