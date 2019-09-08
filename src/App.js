import React, {Component} from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeComponent from "./components/Home/Home";
import KindOfKeikContainer from "./containers/KindOfKeik/KindOfKeik";
class App extends Component {

  render(){
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" component={HomeComponent}></Route>
            <Route exact path = "/kindofkeik" component={KindOfKeikContainer}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
}

export default App;
