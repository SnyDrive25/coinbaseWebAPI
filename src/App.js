import './App.css';

function App() {

  const fetch = require('node-fetch');

  const url = 'https://api.exchange.coinbase.com/currencies';
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  
  fetch(url, options)
    .then(res => res.json())
    .then(function(res) {
        for(let crypto = 0; crypto < res.length; crypto++) {
          if(res[crypto]['details']['type'] === 'crypto') {
            var out = res[crypto]['id'];
            document.getElementById("out").innerHTML += "<div class='case'>" + out + "</div>";
          }
        }
      }
    )
    .catch(err => console.error('error:' + err));

  return (
    <div className="App">
      <div className='part'>
        <h1>Coinbase API</h1>
        <div className='ctn flex' id="out">

        </div>
      </div>
    </div>
  );
}

export default App;
