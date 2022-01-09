import React, {Component} from 'react';
import './Styles.css'
import randomColor from "randomcolor";

class Book extends Component {

    constructor() {
        super();
    }

    getImage(){

    }

    render(props) {

        let titles = this.props.book.books
        let color = randomColor()
        const bookList = titles.map(book => (

            <div>
                <h2 className="title" key={book.id}>{book.title}</h2>
                <p className="author" key={this.props.book.id}>{this.props.book.name}</p>
            </div>
        ))
        return (
            <article style={{background: color,}} className="testimonial grid-col-span-2 flow bg-primary-400 quote text-neutral-100">
                {bookList}
           </article>
        );
    }
}

export default Book;