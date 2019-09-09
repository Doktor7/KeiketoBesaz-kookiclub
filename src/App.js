import React, {Component} from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeComponent from "./components/Home/Home";
import KindOfKeikContainer from "./containers/KindOfKeik/KindOfKeik";
import ChoosenKeikContainer from "./containers/ChoosenKeik/ChoosenKeik";
import HowMuchKeikContainer from "./containers/HowMuchKeik/HowMuchKeik";
import FloorsContainer from "./containers/Floors/Floors";
import ShapeContainer from "./containers/Shape/Shape";
class App extends Component {

  render(){
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" component={HomeComponent}></Route>
            <Route exact path = "/kindofkeik" component={KindOfKeikContainer}></Route>
            <Route exact path = "/choosenkeik" component={ChoosenKeikContainer}></Route>
            <Route path="/howmuchkeik" component={HowMuchKeikContainer}></Route>
            <Route path="/floors" component = {FloorsContainer}></Route>
            <Route path="/shape" component = {ShapeContainer}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
}

export default App;
