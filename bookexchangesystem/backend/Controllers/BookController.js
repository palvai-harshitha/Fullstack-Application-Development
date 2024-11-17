const BookModel = require("../Models/Book");

const AddBook = async (req, res) => {
    try {
        const body = req.body;
        body.bookImg = req?.file ? req?.file?.path : null;
        
        console.log(body);
        const emp = new BookModel(body);
        await emp.save();
        res.status(201)
            .json({
                message: 'Book Added',
                success: true,
            });
    } catch (err) {
        
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err
        })
    }
}
const getAllBooks = async (req, res) => {
    try {
         // Get page and limit from query parameters
            let { page, limit, search } = req.query;

         // Set default values if they are not provided
            page = parseInt(page) || 1;
            limit = parseInt(limit) || 10;
        
         // Calculate the number of documents to skip
            const skip = (page - 1) * limit;
        
         // Build the search criteria
            let searchCriteria = {};
            if (search) {
                searchCriteria = {
                    $or: [
                        { title: { $regex: search, $options: 'i' } },
                        { author: { $regex: search, $options: 'i' } },
                        { genre: { $regex: search, $options: 'i' } },
                        { condition: { $regex: search, $options: 'i' } },
                        { avaliability: { $regex: search, $options: 'i' } },
                        { userId: { $regex: search, $options: 'i' } }
                        
                    ]
                    
                }
            }
         // Get the total number of books for pagination info
            const totalBooks = await BookModel.countDocuments(searchCriteria);
            
         // Fetch the books with pagination
            const allbooks = await BookModel.find(searchCriteria)
                .skip(skip)
                .limit(limit)
                .sort({ updatedAt: -1 });

         // Calculate total pages
            const totalPages = Math.ceil(totalBooks / limit);
            
        
        res.status(200)
            .json({
                message: 'All Books',
                success: true,
                data: {
                    books: allbooks,
                    pagination: {
                        totalBooks,
                        currentPage: page,
                        totalPages,
                        pageSize: limit
                    }
                }
            });
    } catch (err) {
        
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err
        })
    }
}
const getBookbyId = async (req, res) => {
    try {
        const id = req.params.id;
        const emp = await BookModel.findOne({ _id: id });
        res.status(200)
            .json({
                message: 'book details',
                success: true,
                data: emp
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err
        })
    }
}
const delBookbyId = async (req, res) => {
    try {
        const id = req.params.id;
        const emp = await BookModel.findByIdAndDelete({ _id: id });
        res.status(200)
            .json({
                message: 'book deleted succesfully',
                success: true
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err
        })
    }
}
const updateBookbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, genre, condition, bookImg,avaliability,userId,descrption} = req.body;
        let updateData = {
            title, author, genre, condition, bookImg,avaliability,userId,descrption, updatedAt: new Date()
        };
        console.log('<-- update ---> ', req.file)
        if (req.file) {
            updateData.bookImg = req.file.path;
        }
        const updatedBook = await BookModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200)
            .json({
                message: 'Book Details Updated Successfully',
                success: true,
                data: updatedBook
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    AddBook,
    getAllBooks,
    getBookbyId,
    delBookbyId,
    updateBookbyId
}