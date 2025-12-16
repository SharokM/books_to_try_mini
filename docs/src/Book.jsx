import React from "react";

const Book = (props) => {

    const onDelete = () => {
        props.deleteBook(props.book);
    }
    return (
        <li>
        {props.book}
        <span className="delete" onClick={onDelete}>X</span>
        </li>
    );
};

export default Book;