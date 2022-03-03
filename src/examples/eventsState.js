import React from 'react';

class EventsState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: '',
      mouseY: '',
      username: '',
      secondButton: false,
    }
  }

  onInputChange = (e) => {
    console.log('Yay! Input')
    console.log(e);

    
    this.setState({
      username: e.target.value,
    })
  };

  onButtonClick = (e) => {
    console.log('Button Clicked')
    console.log(e);

    alert(this.state.username);

    this.setState((prevState) => ({
      secondButton: !prevState.secondButton,
      })
    );
  }

  onDivHover = (message, e) => {
    console.log('Hovering over button');
    console.log(message);

    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
    })
  }

  onClick(e) {
    console.log(e);
  }

  onKeyPress = (e) => {
    console.log(e.key);
  }

  render() {
    const { username, secondButton, mouseX, mouseY } = this.state;
    return (
      <div className="event-body">
        <input type="text" onChange={this.onInputChange} onKeyDown={this.onKeyPress} name="username" value={username} />
        <button onClick={this.onButtonClick}>Click ME!!</button>
        <div className="event-body__mouse_events" onMouseEnter={(e) => this.onDivHover("somethng", e)}>
          {`My Box hovering at x:${mouseX}  y:${mouseY}`}
        </div>
        { secondButton ? <button onClick={this.onClick}>Click ME AGAIN!!</button> : null}
      </div>
    )
  }
}

export default EventsState;