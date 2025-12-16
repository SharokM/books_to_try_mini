import React, { useState } from 'react'
import './App.css'
import NewBookInput from './NewBookInput.jsx'
import Book from './Book.jsx'


function App() {
  
  
  const [booksToRead, setBooksToRead] = useState([]);

  const addBook = (book) => {
    setBooksToRead([...booksToRead, book]);
  };

  const deleteBook = (bookToDelete) => {
    const updatedBooks = booksToRead.filter((book) => book !== bookToDelete) 
    setBooksToRead(updatedBooks);
  }

  return (
    <div className='App'>
      <h1>Book List!</h1>
      <NewBookInput addBook={addBook}/>
      <ul className='book-list'>
        {booksToRead.map((book, index) => (
        <Book key={index} book={book} deleteBook={deleteBook}/>
        ))}
      </ul>
    </div>
  )
}

export default App
