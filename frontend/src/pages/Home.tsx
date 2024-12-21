import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
}

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to BookNook</h1>
      <div className="books-grid">
        {books.map(book => (
          <Link to={`/book/${book._id}`} key={book._id} className="book-card">
            <img src={book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;