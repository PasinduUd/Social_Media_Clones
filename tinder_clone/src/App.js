import React from 'react';
import './app.css';
import Header from './header';
import TinderCards from './tinderCards';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      {/*SwipeButtons*/ }
    </div>
  );
}

export default App;
