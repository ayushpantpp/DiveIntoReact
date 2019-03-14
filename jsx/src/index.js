// import the react and react dom directory.
import React from 'react';
import ReactDOM from 'react-dom';

// Create react component.
function getButtonText() {
  return "Click on us";
}

const App = () => {

  const buttonText = 'Click Me !!';
  
  return (
    <div>
      <label className='label' htmlFor='name'>
        Enter Name: 
      </label>
      <input id='name' type='text'/>
      <button style= {{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>

    </div>
  );
} 


// Take the react component and show it on screen.

ReactDOM.render(<App />, document.querySelector('#root'));