import React from 'react';
import ButtonDisplayBooks from "../components/bookDisplay/ButtonDisplayBooks";

const Books = () => {
    return (
        <div
            style={{
                textAlign: "center",
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1>Books</h1>
            <ButtonDisplayBooks/>
        </div>
    );
};

export default Books;
