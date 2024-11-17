

const { AddBook, getAllBooks,getBookbyId ,delBookbyId,updateBookbyId} = require('../Controllers/BookController');
const { cloudinaryFileUploader } = require('../Middleware/FileUploader');

const router = require('express').Router();

router.get('/all',getAllBooks);

router.post('/add-book',cloudinaryFileUploader.single('bookImg') ,AddBook);
router.put('/:id',cloudinaryFileUploader.single('bookImg') ,updateBookbyId);
router.get('/:id',getBookbyId);

router.delete('/:id',delBookbyId);


module.exports = router;
