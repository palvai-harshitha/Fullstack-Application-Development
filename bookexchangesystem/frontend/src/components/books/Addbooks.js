import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./AddBookForm.css";
import { AddBook } from "../../booksapi";
import { ToastContainer } from "react-toastify";
import { handleSuccess, handleError } from "../../utils";

function AddBookForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "Comedy", // Default genre
    condition: "New", // Default condition
    bookImg: null, // File upload
    avaliability: "Yes", // Default availability
    userId: "", // Fetched from localStorage
    descrption: "",
    uniqueId: "1", // Default unique ID
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch `loggedInUser` from localStorage on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setFormData((prevData) => ({ ...prevData, userId: loggedInUser }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      bookImg: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Book Data:", formData);
    try {
      const { success, message } = await AddBook(formData);
      console.log(success, message);
      if (success) {
        handleSuccess(message);
        // 3000ms = 3 seconds
      } else {
        handleError(message);
      }
      setTimeout(() => {
        navigate("/viewbooks"); // Navigate to /viewbooks after 3 seconds
      }, 3000); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-book-form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Genre:</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          >
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>

        <div className="form-group">
          <label>Condition:</label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          >
            <option value="New">New</option>
            <option value="Semi-New">Semi-New</option>
            <option value="Old">Old</option>
          </select>
        </div>

        <div className="form-group">
          <label>Book Image:</label>
          <input
            type="file"
            name="bookImg"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Availability:</label>
          <select
            name="availability"
            value={formData.avaliability}
            onChange={handleChange}
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="descrption"
            value={formData.descrption}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Hidden Inputs */}
        <input type="hidden" name="userId" value={formData.userId} />
        <input type="hidden" name="uniqueId" value={formData.uniqueId} />

        <button type="submit">Add Book</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddBookForm;
