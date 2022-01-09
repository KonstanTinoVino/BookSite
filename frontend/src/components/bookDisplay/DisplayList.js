import React, {Component} from 'react';
import Book from "./Book";

class DisplayList extends Component {

    render(props) {
        let books = this.props.books

        const bookList = books.map(book =><Book key={book.id} book={book}/>)

        return (
            <div className="testimonial-grid">
                {bookList}
            </div>
        );
    }
}

export default DisplayList;