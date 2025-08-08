
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 




function CartModal ({ cartItems, onClose, removeFromCart }) {
    return (
       <div className="modal-overlay">
      <div className="modal">
        <div className="header-modal">
              <h3><FontAwesomeIcon icon={faShoppingCart} /> Cart Items</h3>
        <button className="close-btn remove_from_cart" onClick={onClose}> <FontAwesomeIcon icon={faXmark} /></button>
        </div>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <Button variant='remove_from_cart btn ' onClick={() => removeFromCart(item.id)} name={"Remove"}></Button>
                
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    );
}

export default CartModal;