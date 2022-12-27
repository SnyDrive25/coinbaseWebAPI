import './App.css';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='part'>
        <h1>Coinbase API</h1>
        <div className='ctn flex' id="out"></div>
      </div>
    </div>
  );
}

export default App;
