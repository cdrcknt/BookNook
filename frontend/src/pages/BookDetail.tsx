import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

interface Review {
  _id: string;
  user: {
    username: string;
  };
  rating: number;
  comment: string;
  date: string;
}

const BookDetail: React.FC = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [book, setBook] = useState<any>(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`http://localhost:5000/api/books/${id}`);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post(
      `http://localhost:5000/api/books/${id}/review`,
      { rating, comment },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    // Refresh book data
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-detail">
      <div className="book-info">
        <img src={book.coverImage} alt={book.title} />
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>{book.description}</p>
      </div>

      <div className="reviews">
        <h3>Reviews</h3>
        {user && (
          <form onSubmit={handleReviewSubmit}>
            <select value={rating} onChange={e => setRating(Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num} stars</option>
              ))}
            </select>
            <textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Write your review..."
            />
            <button type="submit">Submit Review</button>
          </form>
        )}
        
        {book.reviews.map((review: Review) => (
          <div key={review._id} className="review">
            <div className="review-header">
              <span>{review.user.username}</span>
              <span>{review.rating} stars</span>
            </div>
            <p>{review.comment}</p>
            <small>{new Date(review.date).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetail;