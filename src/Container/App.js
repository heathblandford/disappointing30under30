import React, { Component } from "react";
import CardList from "../Components/CardList";
import "../Stylizers/App.css";
import "../Assets/plusButton.svg";
import Modal from "react-modal";

Modal.setAppElement("#root");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSubmit = e => {
    //this is a "manual" submit instead of just using standard HTML type submit
    document.submitYourOwn.submit(); //this is how we submit
    setTimeout(() => {
      this.setState({ modalIsOpen: false });
    }, 500); // set time out so that the web page had time to submit the form
    e.preventDefault(); //prevent default submit option. ez pz
  };

  componentDidMount() {
    //fetch api data
    fetch("https://frozen-plateau-56176.herokuapp.com")
      .then(response => response.json())
      // { data } is object shorthand. this.setState() expects an object to return an array
      .then(data => this.setState({ data, loading: false }));

    //there was a setTimeout() here for force loading icon, but moved to fetch .then for rendering
  }

  render() {
    const { data } = this.state;
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Disappointing 30 Under 30</h1>
          <p>A place to remind your parents how much of a let down you are</p>
          <button onClick={this.openModal}>Add Your Own</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="Modal"
            overlayClassName="Overlay"
            // contentLabel="Example Modal"
          >
            <h1>Add Your Own</h1>
            <form
              action="https://frozen-plateau-56176.herokuapp.com"
              method="post"
              target="dummyframe"
              onSubmit={this.handleSubmit}
              name="submitYourOwn"
            >
              {/* this closes the modal fine but doesn't submit the form */}
              <input type="text" name="first_name" placeholder="First Name" required/>
              <br />
              <input type="text" name="last_name" placeholder="Last Name" required/>
              <br />
              <input type="number" name="age" min="20" max="29" placeholder="Age" required/>
              <br />
              <textarea
                cols="50"
                rows="5"
                name="disappointment"
                placeholder="Type your disappointment here!"
                required
              />
              <br />
              <button type="submit">Add it!</button>
              <button onClick={this.closeModal}>Cancel</button>
            </form>
            <div className="buttonHolder">
            </div>
          </Modal>
        </header>

        <main>
          <CardList data={data} />
        </main>
        <footer>
          <p>made with <span role="img" aria-label="love">❤️</span> and diet soda in Cincinnati, OH</p>
          <p>inspired by <a href="https://www.newyorker.com/humor/daily-shouts/a-selection-of-the-30-most-disappointing-under-30">an article</a> from The New Yorker</p>
        </footer>
      </div>
    );
  }
}

export default App;
