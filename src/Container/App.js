import React, { Component } from 'react';
import Card from '../Components/Card';
import '../Stylizers/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Disappointing 30 under 30</h1>
          <p>A place to remind your parents how much of a let down you are</p>
        </header>
        <main>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </main>
      </div>
    );
  }
}

export default App;
