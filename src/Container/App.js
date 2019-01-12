import React, { Component } from 'react';
import CardList from '../Components/CardList';
import '../Stylizers/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        data: [],
    }
};

componentDidMount() {
    fetch('https://frozen-plateau-56176.herokuapp.com')
    .then(response => response.json())
    .then(data => this.setState({ data }));
}

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Disappointing 30 under 30</h1>
          <p>A place to remind your parents how much of a let down you are</p>
        </header>
        <main>
            <CardList data={ data }/>
        </main>
      </div>
    );
  }
}

export default App;
