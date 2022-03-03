import React, {useState} from 'react';

// https://reactjs.org/docs/events.htm
function Event(props) {
  // const [username, setUsername] = useState('');
  const [secondButton, setSecondButton] = useState(true);
  const [mouseX, setMouseX] = useState('');
  const [mouseY, setMouseY] = useState('');

  const onButtonClick = (e) => {
    console.log('Button Clicked')
    console.log(e);
    setSecondButton(!secondButton);
  }

  const onDivHover = (message, e) => {
    // console.log('Hovering over button');
    console.log(message);
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  function onClick(e) {
    console.log(e);
  }

  const onKeyPress = (e) => {
    console.log(e);
  }

  return (
    <div className="event-body">
      <input type="text" onChange={props.onInputChange} onKeyDown={onKeyPress} />
      <button onClick={onButtonClick}>Click ME!!</button>
      <div className="event-body__mouse_events" onMouseEnter={(e) => onDivHover("somethng", e)}>
          {`My Box hovering at x:${mouseX}  y:${mouseY}`}
        </div>
      { secondButton ? <button onClick={onClick}>Click ME AGAIN!!</button> : null}
    </div>
  )
}

export default Event;