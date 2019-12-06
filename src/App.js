import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css';
import Dashboard from './screens/Dashboard'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
