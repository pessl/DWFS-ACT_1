import { useParams } from "react-router-dom";
import BookDetail from "../components/books/BookDetail";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const BookView = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);  

  return (
    <div className="book-view">
      <h1>Detalle del Libro</h1>
      <BookDetail bookId={id} onAddToCart={addToCart} />
    </div>
  );
};

export default BookView;