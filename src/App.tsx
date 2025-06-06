import Counter from "./components/Counter";
import { UseTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = UseTheme();
  return (
    <>
      <div style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1>Hello, React + TS</h1>
        <Counter initialCount={10} />
      </div>
    </>
  ) 
}

export default App;
