import React, { useState } from "react";

const NewBookInput = (props) => {
    const [book, setBook] = useState("");

    const updatedBook = (event) => {
    setBook(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBook(book);
        setBook("");
    }


    return (
        <form className="book-form" onSubmit={handleSubmit}>
            <input 
            input="text" 
            area-label="Add New Book!" 
            value={book} 
            onChange={updatedBook}
            />
            <button> Add to List!</button>
            </form>
    )
}
export default NewBookInput;