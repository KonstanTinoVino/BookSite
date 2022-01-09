import React from 'react';
import BookDisplay from "../components/bookDisplay/BookDisplay";

const Books = () => {
    return (
        <div className="bookDiv">
            <h1 style={{textAlign: "center",}}>Books</h1>
            <BookDisplay/>
        </div>
    );
};

export default Books;
