import { useContext, useState } from "react";
import BookList from "../components/books/BookList";
import SearchBar from "../components/SearchBar";
import books from "../data/books.json";
import "./HomeView.css";
import { CartContext } from "../context/CartContext";

const HomeView = () => {  

  const [searchBook, setSearchBook] = useState("");
  const { addToCart } = useContext(CartContext);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchBook.toLowerCase())
  );  

  return (
    <div className="home-view">
      <h1 className="home-view__title">Catálogo de Libros</h1>
      <SearchBar value={searchBook} onChange={setSearchBook} />
      <BookList books={filteredBooks} onAddToCart={addToCart} />
    </div>
  );
};

export default HomeView;
