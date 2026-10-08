import * as bookModels from '../models/bookModels.js';

export const fetchAllBooks = async () => {
 const books = await bookModels.fetchAllBooks();
 return books;
}

export const createBook = async (book) => {
 const bookId = await bookModels.insertBook(book);
 return bookId;
}