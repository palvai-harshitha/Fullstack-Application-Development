import React, { useState } from 'react';
import Header from '../header/header';

function Bookhistory() {
  const [activeBox, setActiveBox] = useState(null);
  const [gettingBooks, setGettingBooks] = useState([
    {
      id: 1,
      image: 'https://res.cloudinary.com/dpro56d3c/image/upload/v1731843164/uploads/clean.png',
      name: 'SPIDER-BOY ANNUAL [IW] (2024) #1',
      description: 'INFINITY WATCH" PART EIGHT! Spider-Boy is juggling being Spider-Mansidekick, keeping his friends safe and just being a regular kid. But nothing stops him from jumping in when trouble is brewing! This time hes joined by MULTITUDE, who has the Soul Stone, and PRINCE OF POWER, who has the Power Stone (of course!), as they face off against a mysterious evil they vow to stop!',
      status: 'Processing',
      OwnerName: 'Harshitha Palvai',
    },
  ]);

  const [givingBooks, setGivingBooks] = useState([
    {
        id: 1,
        image: 'https://res.cloudinary.com/dpro56d3c/image/upload/v1731843164/uploads/clean.png',
        name: 'SPIDER-BOY ANNUAL [IW] (2024) #1',
        description: 'INFINITY WATCH" PART EIGHT! Spider-Boy is juggling being Spider-Mansidekick, keeping his friends safe and just being a regular kid. But nothing stops him from jumping in when trouble is brewing! This time hes joined by MULTITUDE, who has the Soul Stone, and PRINCE OF POWER, who has the Power Stone (of course!), as they face off against a mysterious evil they vow to stop!',
        status: 'Processing',
        OwnerName: 'Harshitha Palvai',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    // Update the status in gettingBooks
    setGettingBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, status: newStatus } : book
      )
    );

    // Optionally update the status in givingBooks for consistency
    setGivingBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, status: newStatus } : book
      )
    );
  };

  return (
    <>
      <Header />
      <h1 style={{ marginBottom: '30px', textAlign: 'center', color: '#4A4A4A' }}>
          Your Book History
        </h1>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ marginBottom: '30px', textAlign: 'center', color: '#4A4A4A' }}>
          Your Book History
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          <button
            className={`btn ${
              activeBox === 'getting' ? 'btn-primary-active' : 'btn-primary'
            }`}
            onClick={() => setActiveBox(activeBox === 'getting' ? null : 'getting')}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
            }}
          >
            Getting
          </button>
          <button
            className={`btn ${
              activeBox === 'giving' ? 'btn-primary-active' : 'btn-primary'
            }`}
            onClick={() => setActiveBox(activeBox === 'giving' ? null : 'giving')}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
            }}
          >
            Giving
          </button>
        </div>

        {activeBox === 'getting' && (
          <div
            style={{
              marginTop: '20px',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '10px',
            }}
          >
            <h3 style={{ marginBottom: '20px', color: '#4A4A4A' }}>
              Books You Are Getting:
            </h3>
            {gettingBooks.map((book) => (
              <div
                key={book.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: '10px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  background: '#f9f9f9',
                }}
              >
                <img
                  src={book.image}
                  alt={book.name}
                  style={{ width: '100px', marginRight: '20px' }}
                />
                <div>
                  <h4 style={{ marginBottom: '10px' }}>{book.name}</h4>
                  <p style={{ margin: '5px 0' }}>{book.description}</p>
                  <p style={{ margin: '5px 0' }}>
                    <strong>Status:</strong> {book.status}
                  </p>
                  <p style={{ margin: '5px 0' }}>
                    <strong>OwnerName:</strong> {book.OwnerName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeBox === 'giving' && (
          <div
            style={{
              marginTop: '20px',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '10px',
            }}
          >
            <h3 style={{ marginBottom: '20px', color: '#4A4A4A' }}>
              Books You Are Giving:
            </h3>
            {givingBooks.map((book) => (
              <div
                key={book.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: '10px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  background: '#f9f9f9',
                }}
              >
                <img
                  src={book.image}
                  alt={book.name}
                  style={{ width: '100px', marginRight: '20px' }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ marginBottom: '10px' }}>{book.name}</h4>
                  <p style={{ margin: '5px 0' }}>{book.description}</p>
                  <p style={{ margin: '5px 0' }}>
                    <strong>Status:</strong> {book.status}
                  </p>
                  <p style={{ margin: '5px 0' }}>
                    <strong>Username:</strong> {book.username}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '10px',
                      marginTop: '10px',
                    }}
                  >
                    <button
                      className="btn"
                      style={{
                        background: '#28a745',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'background 0.3s',
                      }}
                      onMouseOver={(e) => (e.target.style.background = '#218838')}
                      onMouseOut={(e) => (e.target.style.background = '#28a745')}
                      onClick={() => handleStatusChange(book.id, 'Accepted')}
                    >
                      Approve
                    </button>
                    <button
                      className="btn"
                      style={{
                        background: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'background 0.3s',
                      }}
                      onMouseOver={(e) => (e.target.style.background = '#c82333')}
                      onMouseOut={(e) => (e.target.style.background = '#dc3545')}
                      onClick={() => handleStatusChange(book.id, 'Declined')}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Bookhistory;
