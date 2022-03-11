import './App.css';
import Head from './components/Head/Head.js';
import Menu from './components/Picker/Picker.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Character Designer</h1>
      </header>
      <div className="left">
        <Menu />
      </div>
      <div className="right">
        <div className="character">{/* <Head /> */}</div>
      </div>
    </div>
  );
}

export default App;
