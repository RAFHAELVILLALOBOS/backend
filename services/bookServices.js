import * as bookModels from '../models/bookModels.js';

export const fetchAllBooks = async () => {
 const books = await bookModels.fetchAllBooks();
 return books;
}

export const createBook = async (book) => {
 const bookId = await bookModels.insertBook(book);
 return bookId;
}

export const updateBook = async (book) => { 
    const updatedRows = await bookModels.update(book);
    return updatedRows;
}

export const deleteBook = async (id) => {
    const deletedBook = await bookModels.remove(id);
    return deletedBook;
}