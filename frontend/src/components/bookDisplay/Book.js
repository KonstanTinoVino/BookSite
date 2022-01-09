import React, {Component} from 'react';
import './Styles.css'

class Book extends Component {

    render(props) {

        let titles = this.props.book.books
        console.log(titles)
        const bookList = titles.map(book => (
            <div>
                <h2 className="title" key={book.id}>{book.title}</h2>
                <p className="author" key={this.props.book.id}>{this.props.book.name}</p>
            </div>
        ))
        return (
            <article className="testimonial grid-col-span-2 flow bg-primary-400 quote text-neutral-100">
                {bookList}
           </article>
        );
    }
}

export default Book;