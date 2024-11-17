import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetBooksById } from '../../booksapi';
import Header from '../header/header';
const Deatils = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState({});

    const fetchBookDetails = async () => {
        try {
            const data = await GetBooksById(id);
            setBook(data);
        } catch (err) {
            alert('Error fetching book details', err);
        }
    };

    useEffect(() => {
        fetchBookDetails();
    }, [id]);

    const handleRequestBook = () => {
        // Simulate request sent successfully
        alert('Request sent successfully!');
        navigate('/home');
    };

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        
        <div className="container mt-5">
            <Header />
            <br /><br />
            <div className="card">
                <div className="card-header">
                    <h2>Book Details</h2>
                </div>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-md-3">
                            <img
                                src={book.bookImg}
                                alt="Book"
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-md-9">
                            <h4><strong>Book Title</strong>: {book.title}</h4>
                            <p><strong>Book Author:</strong> {book.author}</p>
                            <p><strong>Book Description:</strong> {book.descrption}</p>
                            <p><strong>Book Genre:</strong> {book.genre}</p>
                            <p><strong>Book Condition:</strong> {book.condition}</p>
                            <p><strong>Book Available:</strong> {book.avaliability}</p>
                            <p><strong>Book Posted by:</strong> {book.userId}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate('/viewbooks')}
                        >
                            Back
                        </button>
                        <button
                            className="btn btn-success"
                            onClick={handleRequestBook}
                        >
                            Request Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deatils;
