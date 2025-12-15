import React, { useState } from 'react'
import './App.css'
import NewBookInput from './NewBookInput.jsx'



function App() {
  
  
  const [booksToRead, setBooksToRead] = useState([]);

  const addBook = (book) => {
    setBooksToRead([...booksToRead, book]);
  };

  return (
    <div className='App'>
      <h1>Book List!</h1>
      <NewBookInput addBook={addBook}/>
      <ul className='book-list'>
        {booksToRead.map((book, index) => {
        return <li key={index}>{book}</li>
        })}
      </ul>
    </div>
  )
}

export default App
