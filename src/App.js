import React from 'react';
import './App.css';
import Form2 from './Form2.js';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Form1 from './Form1';

function App() {
  return (
    <Router>
      <div className="App"><br/><br/>
        <button><a href="/Form1"><b>GO TO SIGN IN PAGE</b></a></button>
        <Route path="/Form1" component={Form1} />
        <Route path="/Form2" component={Form2} />
      </div>
    </Router>
  )
}

export default App;
