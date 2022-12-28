import './App.css';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='part'>
        <h1>Coinbase API</h1>
        <div className='ctn flex'>
          <p className='intro'>
            Hi 👋, Welcome to my Coinbase API project.
            <br></br>
            <br></br>
            Here, you will find a list of <a href="/cryptocurrencies">Cryptocurrencies</a> listed in coinbase API and you will be able to check all their bids and asks.
            <br></br>
            You will also find all <a href="/candles">Candles</a> of one pair of your choice.
            <br></br>
            You will be able to pass <a href="/order">Orders</a> too.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;