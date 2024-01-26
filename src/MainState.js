import React, { useState } from 'react'

const Main = () => {
  const [text, setText] = useState('Hello World');

  const handleClick = () => {
    setText('JOHNBULL');
  };
  console.log(text);
  return (
    <div className='App'>
        {/*{console.log(text)} */}
      <h1>{text}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Main


