import './Candles.css';
import '../../App.css';
import Navbar from '../../navbar/Navbar';


function Candles() {

  const fetch = require('node-fetch');
  
  var csvData = [["date","high","low","open","close","volume"]];
  document.getElementById('table').innerHTML = "<tr><th>Date</th><th>High</th><th>Low</th><th>Open</th><th>Close</th><th>Volume</th></tr>"

  function refreshDataCandle(duration) {
    var pair = document.getElementById('pair').value;
    const url = "https://api.exchange.coinbase.com/products/" + pair + "/candles?granularity=" + duration;
    const options = {method: 'GET', headers: {accept: 'application/json'}};  
    fetch(url, options)
      .then(res => res.json())
      .then(function(res) {
        
        // TO SETUP THE HEADERS OF THE CSV FILE        
        
        for(let i = 0; i < res.length; i++) {

          // TO INSERT LINES IN THE CSV FILE
          document.getElementById('table').innerHTML += "<tr><td>" + res[i][0] + "</td><td>" + res[i][2] + "</td><td>" + res[i][1] + "</td><td>" + res[i][3] + "</td><td>" + res[i][4] + "</td><td>" + res[i][5] + "</td></tr>"

        }
        console.log(csvData);
      })
  }

  return (
    <div className="App">
      <Navbar />
      <div className='part'>
        <h1>Coinbase API</h1>
        <div className='ctn flex'>
          <div className='w50'>
            <h2>Get Candles</h2>
            <input placeholder='pair' id='pair'></input>
            <button onClick={() => refreshDataCandle(300)}>Get Candles</button>
            <br></br>
            <table id="table"></table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candles;
