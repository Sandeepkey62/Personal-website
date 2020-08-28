import React from 'react';
import Nav from './components/nav';
import About from './components/about';
import Home from './components/home';
import Project from './components/project';
import Contact from './components/contact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
function App() {
  return (
   
      <Router>
   <Nav/>
   <Route path="/" exact component={Home}/>
   <Route path="/about" component={About}/>
   <Route path="/project" component={Project}/>
   <Route path="/contact" component={Contact}/>
      </Router>

  );
}

export default App;
