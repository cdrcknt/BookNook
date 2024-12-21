# BookNook

BookNook is a full-stack web application designed for book lovers to explore books, write reviews, and manage their reading lists. Built with modern technologies, it offers a seamless and intuitive experience for book enthusiasts.

## Features

- **Browse Books**: Explore a wide range of books with detailed information.
- **User Reviews**: Leave reviews for your favorite (or not-so-favorite) books.
- **Reading Lists**: Track and manage your personal reading list.
- **Authentication**: Secure login and registration using JSON Web Tokens (JWT).

---

## Tech Stack

### Frontend
- **React** with **TypeScript**: Provides a responsive and interactive user interface.

### Backend
- **Node.js** with **Express**: Handles server-side logic and APIs.

### Database
- **MongoDB**: Stores user data, book details, reviews, and reading lists.

### Authentication
- **JWT (JSON Web Tokens)**: Secures user sessions and API access.

---

## Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/cdrcknt/booknook.git
   ```
2. Navigate to the project directory:
   ```bash
   cd booknook
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
   MONGO_URI=<Your MongoDB Connection String>
   JWT_SECRET=<Your JWT Secret>
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

---

## API Endpoints

### Authentication
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Authenticate and log in a user.

### Books
- `GET /books`: Fetch all books.
- `POST /books`: Add a new book (protected).
- `GET /books/:id`: Fetch details of a specific book.
- `POST /books/:id/review`: Add a review to a book (protected).

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For inquiries or feedback, contact:
- **GitHub**: [cdrcknt](https://github.com/cdrcknt)
