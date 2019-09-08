import React, {Component} from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeComponent from "./components/Home/Home";
class App extends Component {

  render(){
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" component={HomeComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
}

export default App;
