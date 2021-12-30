import React, {Component} from 'react';
import Book from "./Book";

class DisplayList extends Component {

    render(props) {
        console.log(this.props.books)
        let books = this.props.books

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