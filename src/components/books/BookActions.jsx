import "./BookActions.css";

const BookActions = ({ onViewDetails, onAddToCart, isOutOfStock }) => {
  return (
    <div className="book-actions">
      <button
        className="book-actions__button book-actions__button--details"
        onClick={onViewDetails}
      >
        Información
      </button>
      <button
        className="book-actions__button book-actions__button--cart"
        onClick={onAddToCart}
        disabled={isOutOfStock}
      >
        {isOutOfStock ? "Sin Stock" : "Agregar al Carrito"}
      </button>
    </div>
  );
};

export default BookActions;