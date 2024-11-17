import React, { useEffect, useState } from 'react';
import './ViewBooks.css';
import Header from '../header/header'; 
import { Link } from 'react-router-dom'; // Ensure this path is correct
import { getAllBooks } from '../../booksapi';

function ViewBooks() { 
  const [bookData, setBookData] = useState({
    books: [],
    pagination: {
      totalBooks: 0,
      currentPage: 1,
      totalPages: 1,
      pageSize: 10,   
    },
  });  

  const fetchBooks = async (search ='',page =1,limit =10) => {
    try {
      const {data} = await getAllBooks(search,page,limit);
      setBookData(data);
    } catch(err) {
      console.log('error',err);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const bookss = bookData.books;
  const pagination = bookData.pagination;
  const { currentPage, totalPages } = pagination;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePagination(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePagination(currentPage - 1);
    }
  };

  const handlePagination = (currentPage) => {
    fetchBooks('', currentPage, 5);
  };

  

  const BookRow = ({ books }) => {
    return (
      <div className="book-box">
        <Link to={`/viewbooks/${books._id}`}>
          <img src={books.bookImg} alt="BookImage" /> {/* Dynamically render the book image */}
        </Link>
        <h3>{books.title}</h3> {/* Dynamically render the title */}
        <h4>{books.author}</h4> {/* Assuming books object has an author field */}
        <p>{books.descrption}</p> {/* Assuming books object has a description field */}
        <div className="user-name">Posted by: {books.userId}</div> {/* Assuming books object has a username field */}
      </div>
    );
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  return (
    <>
      <Header /> {/* Render the Header component */}

      <div className="add-books-container">
  <Link to="/addbooks">
    <button className="add-books-button">
      + Add Books
    </button>
  </Link>
</div>
<div className="books-container">
        {
          bookss.map((book) => (
            <BookRow books={book} key={book._id} />
          ))
        }
      </div>

      <div className="d-flex justify-content-between align-items-center my-3">
        <span className="badge bg-primary">Page {currentPage} of {totalPages}</span>
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {pageNumbers.map(page => (
            <button
              key={page}
              className={`btn btn-outline-primary me-1 ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePagination(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="btn btn-outline-primary ms-2"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

    </>
  );
}

export default ViewBooks;
