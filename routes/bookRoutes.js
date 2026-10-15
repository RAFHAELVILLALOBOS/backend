import express from 'express';
import * as bookController from '../controllers/bookController.js';

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.getAllBooks);
bookRoutes.post('/', bookController.createBook);
bookRoutes.put('/:id', bookController.updateBook);
bookRoutes.delete('/:id', bookController.deleteBook);

export default bookRoutes;
