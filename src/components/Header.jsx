import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
import cartIcon from "../assets/cart.svg";
import "./../styles/styles.css";

export const Header = () => {
  const { totalItems, cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Relatos de Papel</Link>
      </div>
      <nav className="header__nav">
        <Link to="/">Landing</Link>
        <Link to="/books">Catálogo</Link>
        <div className="icon-cart-wrapper" onClick={() => setCartOpen(!isCartOpen)}>
          <img src={cartIcon} alt="Carrito" className="icon-cart" />
          {totalItems > 0 && <span className="icon-cart-count">{totalItems}</span>}
          {totalItems > 0 && <span className="icon-cart-indicator"></span>}
        </div>
      </nav>
      <Cart
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onCheckout={() => {
          clearCart();          
          setCartOpen(false);
        }}
      />
    </header>
  );
};

export default Header;
