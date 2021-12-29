import React, {Component} from 'react';
import './myStyles.css'

class Book extends Component {

    render(props) {
        return (
            <div>
                <li className='book'>{this.props.book.title}, {this.props.book.author}</li>
            </div>
        );
    }
}

export default Book;