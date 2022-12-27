import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
        <div onClick={() => window.location.href = '/'}>Home</div>
        <div onClick={() => window.location.href = '/cryptocurrencies'}>Cryptocurrencies</div>
        <div onClick={() => window.location.href = '/candles'}>Candles</div>
        <div onClick={() => window.location.href = '/order'}>Order</div>
    </div>
  );
}

export default Navbar;