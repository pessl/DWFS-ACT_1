import { useNavigate } from "react-router-dom";
import "./../styles/styles.css";

const Cart = ({ isOpen, cartItems, onClose, onRemove, onIncrease, onDecrease }) => {
  const navigate = useNavigate();
  
  return (
    <div className={`cart ${isOpen ? "cart--open" : ""}`}>
      <div className="cart__header">
        <h2>Carrito de Compras</h2>
        <button className="cart__close-button" onClick={onClose}>✖</button>
      </div>
      <div className="cart__content">
        {cartItems.length === 0 ? (
          <p className="cart__empty">Tu carrito está vacío.</p>
        ) : (
          <ul className="cart__list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart__item">
                <img src={item.image} alt={item.title} className="cart__item-image" />
                <div className="cart__item-info">
                  <h3 className="cart__item-title">{item.title}</h3>
                  <p className="cart__item-price">Precio: ${item.price.toFixed(2)}</p>
                  <div className="cart__item-controls">
                    <button onClick={() => onDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.id)}>+</button>
                  </div>
                  <button 
                    className="cart__item-remove" 
                    onClick={() => onRemove(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 && (
        <button 
          className="cart__checkout"
          onClick={() => {
            navigate("/checkout");
            onClose();
          }}>
          Proceder al Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;