import React from 'react';
import '../App.css';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
  }

onIncreaseBreakLength(){
  this.setState((prevState) => {
    return{
      breakLength: prevState.prevLength + 1
    };
  });
}

  render(){
    return (
        <main>
          <h2>Pomodoro App</h2>
          <section className="interval-length-container">
            <BreakInterval BreakInterval={this.state.breakLength} increaseBreak={this.onIncreaseBreakLength}/>
            <SessionLength SessionLength={this.state.sessionLength}/>
          </section>
          <Timer timerMinute={this.state.timerMinute} />
        </main>
      );
  }
}

export default App;
