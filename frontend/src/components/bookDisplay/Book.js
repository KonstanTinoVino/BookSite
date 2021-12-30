import React, {Component} from 'react';
import './Styles.css'

class Book extends Component {

    render(props) {
        return (
            <div>
                <li className='book'>{this.props.book.name}, {this.props.book.author}</li>
            </div>
        );
    }
}

export default Book;