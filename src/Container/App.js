import React, { Component } from 'react';
import CardList from '../Components/CardList';
import '../Stylizers/App.css';
import '../Assets/plusButton.svg';
import Modal from 'react-modal';

const customStyles = { //this is for the modal
	overlay: {
		backgroundColor       : 'rgba(0,0,0,0.9)'
	}, 
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)',
		height								: '400px',
		width									: '300px',
		borderRadius					: '15px',
	}
};
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
			data: [],
    	loading: true,
    	modalIsOpen: false,
	}

	  this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
};

openModal() {
    this.setState({modalIsOpen: true});
}

afterOpenModal() {
	// references are now sync'd and can be accessed.
	this.subtitle.style.color = '#b96fd6';
	this.subtitle.style.textAlign = 'center';
}

closeModal() {
	this.setState({modalIsOpen: false});
}

handleSubmit = (e) => { //this is a "manual" submit instead of just using standard HTML type submit
	document.submitYourOwn.submit(); //this is how we submit
	setTimeout(() => {this.setState({modalIsOpen: false})}, 500); // set time out so that the web page had time to submit the form
	e.preventDefault(); //prevent default submit option. ez pz
}

componentDidMount() {
		//fetch api data
	  fetch('https://frozen-plateau-56176.herokuapp.com')
    .then(response => response.json())
		// { data } is object shorthand. this.setState() expects an object to return an array
		.then(data => this.setState({ data, loading: false }));

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
					<button onClick={this.openModal}>Open Modal</button>
					<Modal
						isOpen={this.state.modalIsOpen}
						onAfterOpen={this.afterOpenModal}
						onRequestClose={this.closeModal}
						style={customStyles}
						// contentLabel="Example Modal"
					>

						<h1 ref={subtitle => this.subtitle = subtitle}>Add Your Own</h1>
						<form action="https://frozen-plateau-56176.herokuapp.com" method="post" target="dummyframe" onSubmit={this.handleSubmit} name="submitYourOwn">
							<input type="text" name="first_name" placeholder="First Name"/><br/>
							<input type="text" name="last_name" placeholder="Last Name"/><br/>
							<input type="number" name="age" placeholder="29"/><br/>
							<textarea cols="25" rows="5" name="disappointment" placeholder="Type your disappointment here!"/><br />
						</form>
							<input type="submit" value="SEND IT" onSubmit={this.handleSubmit}/>
							<button onClick={this.closeModal}>Cancel</button>
					</Modal>
        </header>


        <main>
            <CardList data={ data }/>
        </main>
      </div>
    );
  }
}

export default App;
