
function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
        <div className="nav_div">
             <h2>Add to Cart Task Using Modal</h2>
      <button className="cart-btn" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
        </div>
    </nav>
  );
}
export default Navbar;
