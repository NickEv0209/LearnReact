import { useEffect, useState } from "react";
import { UseTheme } from "../context/ThemeContext";

interface Prop {
  initialCount: number;
}

const Counter = ({initialCount}: Prop) => {
  const [count, setCount] = useState(initialCount ?? 0);
  const { toggleTheme } = UseTheme();

  useEffect(() => {
    console.log(`Count has been set to ${count}`);
  }, [count]);

  return (
    <>
    <h1>{count}</h1>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
    </>
  )
}

export default Counter;
