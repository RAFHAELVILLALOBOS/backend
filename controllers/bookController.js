import * as bookServices from '../services/bookServices.js';

export const getAllBooks = async (req, res) => {
    const books = await bookServices.fetchAllBooks();
    res.status(200).json(books); 
}

export const createBook = async (req, res) => {
   const {name, author} = req.body;
    const book = {name, author};

    try{
        const bookId = await bookServices.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
           error:"Internal Server Error"
        });
    }
}

export const updateBook = async (req, res) => {
    const {name, author} = req.body;
    const { id } = req.params;
    const book = {id, name, author};

    try {
        const updatedBook = await bookServices.updateBook(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
