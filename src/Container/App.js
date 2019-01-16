import React, { Component } from 'react';
import CardList from '../Components/CardList';
import '../Stylizers/App.css';
import '../Assets/plusButton.svg';
import AddYourOwn from '../Components/AddYourOwn';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
		data: [],
		loading: true
    }
};

componentDidMount() {
	//fetch api data
	  fetch('https://frozen-plateau-56176.herokuapp.com')
    .then(response => response.json())
	// { data } is object shorthand. this.setState() expects an object to return an array
	.then(data => this.setState({ data }));

	setTimeout(() => {
		this.setState({ loading: false})
	}, 1500);
}

  render() {
    const { data } = this.state;
	const { loading } = this.state;

	if(loading) { // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
	}

    return (
      <div className="App">
        <header className="App-header">
          <h1>Disappointing 30 under 30</h1>
          <p>A place to remind your parents how much of a let down you are</p>
		  <img src="../Assets/plusButton.svg" alt="Add Your Own" height="30" width="30" className="addYourOwn" onClick={AddYourOwn}/>
        </header>
        <main>
            <CardList data={ data }/>
        </main>
      </div>
    );
  }
}

export default App;
