require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('../models/Book');

const sampleBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story of decadence and excess.",
    coverImage: "https://example.com/gatsby.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction.",
    coverImage: "https://example.com/1984.jpg"
  }
];

async function seedBooks() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Book.deleteMany({}); // Clear existing books
    await Book.insertMany(sampleBooks);
    console.log('Sample books added successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding books:', error);
    process.exit(1);
  }
}

seedBooks();