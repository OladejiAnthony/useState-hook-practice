import { useState } from "react";
//Question: update counter value to perform the following 4-operations on button click
//subtract, add, reset, addDouble 
//counter color should be changing as the value gets updated

const Counter = () => {
  //Count useState hook
  const [count, setCount] = useState(0);
  //Color useState hook
  //const [color, setColor] = useState("#444");

  const handleSubtract = () => {
    setCount(count -1 );
    //setColor("blue")
    console.log(count -1);
  }

  const handleReset = () => {
    setCount(0);
    //setColor("#444")
    console.log(0);
  }

  const handleAdd = () => {
    setCount(count + 1);
    //setColor("green")
    console.log(count);
  }

  const handleDouble = () => {
    setCount((count) => count + 1); //state updater function
    //0 + 1 = 1;
    setCount((count) => count + 1); //state updater function
    // 1 + 1 = 2;
    console.log(count);
  }
  

  //color variable for changing states instead of using useState()
  let color = "#444";
    if (count >= 1) {
      color = "green"
    } else if (count < 0) {
      color = "blue"
    } else {
      color = "#444"
    }

  return (
    <section>
      <div>
        <h1 style={{ color: color }}>
          {count} 
        </h1>

        <div>
          <button onClick={handleSubtract}>
            Subtract
          </button>
          <button onClick={handleReset}>
            Reset
          </button>
          <button onClick={handleAdd}>
            Add
          </button>
          <button onClick={handleDouble}>
            Add Double
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;

