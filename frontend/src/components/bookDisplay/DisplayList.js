import React, {Component} from 'react';
import Book from "./Book";

class DisplayList extends Component {

    constructor() {
        super();
    }


    render() {

        let books = [
            {
                title: 'The Grapes of Wrath',
                id: 1,
                author: 'John Steinbeck'
            },
            {
                title: 'Richard III',
                id: 2,
                author: 'William Shakespeare'
            },
            {
                title: 'Tom Sawyer',
                id: 3,
                author: 'Mark Twain'
            }
        ];

        const bookList = books.map(book =><Book key={book.id} book={book}/>)

        return (
            <div>
                <ul>
                {bookList}
                </ul>
            </div>
        );
    }
}

export default DisplayList;