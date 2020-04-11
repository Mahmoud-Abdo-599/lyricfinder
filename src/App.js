import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {Provider} from './context';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics' ;
import About from './components/layout/About';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/lyricfinder" component={Index} />
              <Route exact path="/lyricfinder/about" component={About} />
              <Route exact path="/lyricfinder/lyrics/track/:id" component={Lyrics} />

            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
