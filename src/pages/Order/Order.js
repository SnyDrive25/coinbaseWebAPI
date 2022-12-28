import './Order.css';
import '../../App.css';
import Navbar from '../../navbar/Navbar';

function Order() {

  const fetch = require('node-fetch');

  function createOrder() {
    const fetch = require('node-fetch');

    // Set up the API client
    const apiKey = document.getElementById('apikey').value;
    const apiSecret = document.getElementById('apisecret').value;
    const baseURL = 'https://api.coinbase.com';

    // Set the parameters for the order
    const productId = document.getElementById('product').value;
    const side = document.getElementById('side').value;
    const type = document.getElementById('type').value;
    const price = document.getElementById('price').value;
    const funds = document.getElementById('funds').value;

    console.log(productId, side, type, price, funds);

    // Make the request to create the order
    fetch(`${baseURL}/orders`, {
      method: 'POST',
      headers: {
        'CB-ACCESS-KEY': apiKey,
        'CB-ACCESS-SIGN': apiSecret,
        'CB-ACCESS-TIMESTAMP': Date.now() / 1000,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_id: productId,
        side: side,
        type: type,
        funds: funds,
        price: price
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

  }

  async function cancelOrder() {

    const key = document.getElementById('apikey').value;
    const secret = document.getElementById('apisecret').value;
    const uuid = document.getElementById('uuid').value;

    console.log(uuid);

    // Set the API endpoint for canceling orders
    const endpoint = "https://api.coinbase.com/v2/orders/" + uuid + "/cancel";

    // Set the request headers
    const headers = {
      'CB-ACCESS-KEY': key,
      'CB-ACCESS-SIGN': secret,
      'CB-ACCESS-TIMESTAMP': Date.now() / 1000,
      'Content-Type': 'application/json',
    };

    try {
      // Make the DELETE request to the Coinbase API
      const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: headers,
      });

      // If the request was successful, return the response data
      if (response.ok) {
        return await response.json();
      } else {
        // If the request was not successful, throw an error
        throw new Error(response.statusText);
      }
    } catch (error) {
      // If there was an error making the request, throw an error
      throw new Error(error);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className='part'>
        <h1>Coinbase API</h1>
        <div className='ctn flex'>
          <div className='w50 flex'>
            <h2>Create Order</h2>
            <input placeholder='API key' id='apikey'></input>
            <input placeholder='Secret key' id='apisecret'></input>
            <input placeholder='Product ID' id='product'></input>
            <select name='Direction' id='side'>
              <option defaultValue="selected">Direction</option>
              <option>buy</option>
              <option>sell</option>
            </select>
            <input placeholder='Price' id='price'></input>
            <input placeholder='Amount' id='funds'></input>
            <select name='Order Type' id='type'>
              <option defaultValue="selected">Order Type</option>
              <option>limit</option>
              <option>market</option>
              <option>stop</option>
            </select>
            <div className='buttons'>
              <button onClick={() => createOrder()}>Create Order</button>
            </div>
          </div>
          <div className='w50 flex'>
            <h2>Cancel Order</h2>
            <input placeholder='API key' id='apikey'></input>
            <input placeholder='Secret key' id='apisecret'></input>
            <input placeholder='uuid' id='uuid'></input>
            <div className='buttons'>
              <button onClick={() => cancelOrder()}>Cancel Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;