import logo from './logo.svg';
import './App.css';
import './remainder.css';
import Remainder from './remainderComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="title">
          Remainder Application
        </h3>
        
      </header>
      <Remainder/>
    </div>
  );
}

export default App;
