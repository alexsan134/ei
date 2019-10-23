import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import './App.css';
import Sidenav from '../Sidenav/Sidenav'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component{
   render(){
      return(
         <BrowserRouter>
	    <Sidenav />
	    <Navbar />
	    <Switch>
	       <Route exact path='/' component={Home}/>
	    </Switch>
	 </BrowserRouter>
	)
   }
}

export default App;
