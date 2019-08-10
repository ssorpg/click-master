import React from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends React.Component {
  state = {
    guessResult: '',
    curScore: 0,
    topScore: 0,
    clicked: []
  }

  handleGuess = async event => {
    const clickedImg = event.target;

    console.log(clickedImg.id);

    if (this.state.clicked.indexOf(clickedImg.id) !== -1) {
      await this.setState({ // it appears setState is async
        guessResult: 'incorrect',
        curScore: 0,
        clicked: []
      })
    }
    else {
      await this.setState({
        guessResult: 'correct',
        curScore: this.state.curScore + 1,
        clicked: [...this.state.clicked, clickedImg.id]
      })
    }

    if (this.state.topScore < this.state.curScore) {
      await this.setState({ topScore: this.state.curScore })
    }
  }

  render() {
    return (
      <div className="App">
        <Header guessResult={this.state.guessResult} curScore={this.state.curScore} topScore={this.state.topScore}></Header>
        <Section handleGuess={this.handleGuess}></Section>
        <Footer></Footer>
      </div>
    );
  };
}

export default App;
