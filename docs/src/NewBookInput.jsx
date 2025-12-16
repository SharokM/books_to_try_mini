import React, { useState } from "react";

const NewBookInput = (props) => {
    const [book, setBook] = useState("");

    const updatedBook = (event) => {
    setBook(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (book !== "") {
            props.addBook(book);
            setBook("");
        } else {
            setBook("");
        }
    }


    return (
        <form className="book-form" onSubmit={handleSubmit}>
            <input 
            className="book-input"
            input="text" 
            area-label="Add New Book!" 
            value={book} 
            onChange={updatedBook}
            />
            <button className="add-button"> Add to List!</button>
            </form>
    )
}
export default NewBookInput;