import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Modal from "../components/Modal";
import "./CheckoutView.css";

const CheckoutView = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [isPaymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setPaymentSuccess(true);

    setTimeout(() => {
      clearCart();
      setPaymentSuccess(false);
      navigate("/books");
    }, 2000);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout-view">
      <h1>Resumen de Compra</h1>
      {cartItems.length === 0 ? (
        <p>No tienes libros en el carrito.</p>
      ) : (
        <div className="checkout-summary">
          <ul className="checkout-list">
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-item">
                <span>{item.title}</span>
                <span>Cantidad: {item.quantity}</span>
                <span>Subtotal: ${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            <strong>Total:</strong> ${totalAmount.toFixed(2)}
          </div>
          <button onClick={handlePayment} className="checkout-button">
            Confirmar Pedido
          </button>
        </div>
      )}
      
      <Modal
        isOpen={isPaymentSuccess}
        onClose={() => {
          clearCart();
          setPaymentSuccess(false);
          navigate("/books");
        }}
        title="¡Pedido realizado con éxito!"
      >
        <p>Gracias por tu compra.</p>
      </Modal>
    </div>
  );
};

export default CheckoutView;
