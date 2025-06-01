import { useEffect, useState } from "react";

interface Prop {
  initialCount: number;
}

const Counter = ({initialCount}: Prop) => {
  const [count, setCount] = useState(initialCount ?? 0);

  useEffect(() => {
    console.log(`Count has been set to ${count}`);
  }, [count]);

  const handleCountPlus = () => {
    setCount(count => count + 1);
  }
  const handleCountMinus = () => {
    setCount(count => count - 1);
  }
  const handleCountReset = () => {
    setCount(initialCount);
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={handleCountPlus}>+</button>
      <button onClick={handleCountMinus}>-</button>
      <button onClick={handleCountReset}>Reset</button>
    </>
  )
}

export default Counter;
