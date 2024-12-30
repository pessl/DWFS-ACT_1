import books from "../../data/books.json";
import "./BookDetail.css";

const BookDetail = ({ bookId, onAddToCart }) => {
  const book = books.find((b) => b.id === parseInt(bookId, 10));

  if (!book) {
    return <p>Libro no encontrado.</p>;
  }

  return (
    <div className="book-detail">
      <div className="book-detail__image-container">
        <img src={book.image} alt={book.title} className="book-detail__image" />
      </div>
      <div className="book-detail__info">
        <h2 className="book-detail__title">{book.title}</h2>
        <p className="book-detail__author"><strong>Autor:</strong> {book.author}</p>
        <p className="book-detail__price"><strong>Precio:</strong> ${book.price.toFixed(2)}</p>
        <p className="book-detail__description"><strong>Descripción:</strong> {book.description}</p>
        <p className="book-detail__rating"><strong>Rating:</strong> ⭐ {book.rating}</p>
        <p className="book-detail__stock">
          <strong>Stock:</strong> {book.stock > 0 ? `${book.stock}` : "Sin stock"}
        </p>
        <button
          className="book-detail__button"
          onClick={() => onAddToCart(book)}
          disabled={book.stock === 0}
        >
          {book.stock > 0 ? "Agregar al Carrito" : "Sin Stock"}
        </button>
      </div>
    </div>
  );
};

export default BookDetail;