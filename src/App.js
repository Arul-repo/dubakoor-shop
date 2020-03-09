import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
/* import logo from './Assets/favicon.ico'; */
import './App.css';
/* import Aux from "../src/Components/HOC/Auxiliary/Aux"; */
import TopSnippet from "../src/Components/Head/TopSnippet";
import Photos from "../src/Components/Photos/Photos";
import Addphoto from "../src/Components/Photos/Addphoto/Addphoto";

class App extends React.Component {

	state = {
		auth: true
	}
	render() {
		return (
			<BrowserRouter>
					<TopSnippet />
					<Switch>
						{ this.state.auth? <Route path="/photos" component={ Photos } /> : <Redirect  from="/photos" to={{pathname: "/", state: "plaese sign in"}} /> }
						<Route exact path="/addphoto" component={ Addphoto } />
						<Route exact path="/" render ={() => <h1> </h1>}/>
						<Route render ={() => <h1>404 NOT FOUND</h1>}/>
					</Switch>
			</BrowserRouter>
  		);
	}
}

export default App;
