import './Cryptocurrencies.css';
import '../../App.css';
import Navbar from '../../navbar/Navbar';

function Cryptocurrencies() {

  const fetch = require('node-fetch');

  // ******************************
  // **  GET LIST OF CURRENCIES  **
  // ******************************

  const url = 'https://api.exchange.coinbase.com/currencies';
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  
  fetch(url, options)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById("out").innerHTML = "<h2>Cryptocurrencies List</h2>";
        for(let crypto = 0; crypto < res.length; crypto++) {
          if(res[crypto]['details']['type'] === 'crypto') {
            var out = res[crypto]['id'];
            document.getElementById("out").innerHTML += "<div class='case' onclick='document.getElementById(`pair`).value = `" + out + "-USD`;document.getElementById(`asset`).value = `" + out + "-USD`'>" + out + "</div>";
          }
        }
      }
    )
    .catch(err => console.error('error:' + err));

  // ****************************
  // **  GET ASK OR BID INFOS  **
  // ****************************

  function getInfos(bidask) {
    var pair = document.getElementById('pair').value;
    fetch('https://api.exchange.coinbase.com/products/' + pair + "/book?level=1", options)
      .then(res => res.json())
      .then(function(res) {
        if(bidask.toLowerCase() === 'bid') {
          document.getElementById("infos").innerHTML = "<strong>" + pair + " bid :</strong><br></br>- $" + res.bids[0][0] + "<br></br>- " + res.bids[0][1] + " " + pair.split('-')[0];
        }
        else {
          document.getElementById("infos").innerHTML = "<strong>" + pair + " ask :</strong><br></br>- $" + res.asks[0][0] + "<br></br>- " + res.asks[0][1] + " " + pair.split('-')[0];
        }
      })
  }

  // **********************************
  // **  GET ORDER BOOK OF AN ASSET  **
  // **********************************

  function getOrderBook() {
    var asset = document.getElementById('asset').value;
    fetch('https://api.exchange.coinbase.com/products/' + asset + "/book?level=2", options)
    .then(res => res.json())
    .then(function(res) {
      document.getElementById('infos2').innerHTML = "<span> <strong>BIDS</strong> </span><span> <strong>ASKS</strong> </span>";
      const maxi = res.bids.length;
      var allhtml = "";
      for(let i = 0; i < res.asks.length; i++) {
        if(i < maxi) {
          allhtml += "<span> " + res.bids[i][0] + " <br></br> " + res.bids[i][1] + " </span>";
        }
        else {
          allhtml += "<span></span>";
        }
        allhtml += "<span> " + res.asks[i][0] + " <br></br> " + res.asks[i][1] + " </span>";
      }
      document.getElementById('infos2').innerHTML += allhtml;
    })
  }

  return (
    <div className="App">
      <Navbar />
      <div className='part'>
        <h1>Coinbase API</h1>
        <div className='ctn flex'>
          <div className='w50 flex' id="out"></div>
          <div className='w50'>
            <h2>Ask or bid price</h2>
            <input placeholder='pair' id='pair'></input>
            <div className='buttons'>
              <button onClick={() => getInfos('bid')}>Get Bid</button>
              <button onClick={() => getInfos('ask')}>Get Ask</button>
            </div>
            <div id="infos">
              <p>Just click on one currency or fill the input before clicking on the buttons !</p>
            </div>
            <h2>Get the order book of an asset</h2>
            <input placeholder='asset' id='asset'></input>
            <div className='buttons'>
              <button onClick={() => getOrderBook()}>Get Order Book</button>
            </div>
            <div id="infos2">
              <p>Just click on one currency or fill the input before clicking on the buttons !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cryptocurrencies;
