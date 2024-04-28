import { useEffect, useState } from "react";
import BookCard from "./BookCard";
const BookList = () => {
  const [books, setBooks] = useState(null);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:4000/api/books");
    const data = await response.json();
    setBooks(data.allBooks);
    console.log(books);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  if (books === null) {
    return <>Loading...</>;
  }
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
