import { useState, useEffect  } from 'react'
import CardDesign from './components/CardDesign'
import Navbar from './components/Navbar'
import CartModal from './components/CartModal'  

import './App.css'

function App() {




  const [cartItems, setCartItems] = useState([])
  
  const [alldata, setData] = useState([]);

    const [showModal, setShowModal] = useState(false);

   const addToCart = (setData) => {
    const exists = cartItems.find(item => item.id === setData.id);
     console.log(setData);
    if (exists) {
      alert("Item already added to the cart");
    } else {
      setCartItems([...cartItems, setData]);
    }
  };

    const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    console.log("Removed item with id:", id);
  };




  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data )=> setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>

<Navbar  cartCount={cartItems.length} onCartClick={() => setShowModal(true)}  />

<div className="all_card">
  {alldata.map((cardDetails, idx) => (
    <CardDesign key={idx}   cardDetails={cardDetails}  addToCart={addToCart}/>
  ))}
</div>

 {showModal && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setShowModal(false)}
          removeFromCart={removeFromCart}
        />
      )}


    </>

  

  )
}

export default App




