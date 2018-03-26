import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cv from './containers/CvContainer';
import Research from './components/Research';
import Teaching from './components/Teaching';
import Writing from './components/Writing';


const Root = props => {
  return(
    <Provider store={props.store}>
      <Router onUpdate={() => {window.scrollTo(0,0)}} history={props.history}>
        <Route path='/' component={Home} />
        <Route path="/cv" component={Cv} />
        <Route path="/research" component={Research} />
        <Route path="/teaching" component={Teaching} />
        <Route path = "/writing" component={Writing} />
      </Router>
    </Provider>
  )
}

export default Root;
