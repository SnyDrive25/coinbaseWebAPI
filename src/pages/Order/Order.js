import './Order.css';
import '../../App.css';
import Navbar from '../../navbar/Navbar';

function Order() {

  const fetch = require('node-fetch');

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

export default Order;
