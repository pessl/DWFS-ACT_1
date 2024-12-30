import { useNavigate } from "react-router-dom";
import BookActions from "./BookActions";
import "./BookCard.css";

const BookCard = ({ book, onAddToCart }) => {
    const navigate = useNavigate();

    return (
        <div className="book-card">
            <img 
                src={book.image}
                alt={book.title}
                className="book-card__image"/>
            <div className="book-card__content">
                <h3 className="book-card__title">{book.title}</h3>
                <p className="book-card__author">{book.author}</p>
                <p className="book-card__price">$.{book.price}</p>
                <p className="book-card__rating">⭐{book.rating}</p>
                <BookActions
                    onViewDetails={() => navigate(`/books/${book.id}`)}
                    onAddToCart={() => onAddToCart(book)}
                    isOutOfStock={book.stock === 0}
                />
            </div>
        </div>
    )
}

export default BookCard;