import React, {Component} from 'react';
import './Styles.css'

class Book extends Component {

    render(props) {

        let titles = this.props.book.books
        console.log(titles)
        const bookList = titles.map(book => (
            <li className='book' key={book.id}>{book.title}, {this.props.book.name}</li>
        ))
        return (
            <>
                {bookList}
           </>
        );
    }
}

export default Book;