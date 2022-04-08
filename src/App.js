import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Swipertest from './routes/Swipertest';
import Clock from './routes/Clock';
import Momenttime from './routes/Momenttime';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/swipertest" component={Swipertest} />
      <Route path="/movie-detail" component={Detail} />
      <Route path="/clock" component={Clock} />
      <Route path="/momenttime" component={Momenttime} />
    </HashRouter>
  );
}

export default App;
