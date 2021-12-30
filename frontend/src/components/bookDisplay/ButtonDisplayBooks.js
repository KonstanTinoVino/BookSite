import React, {Component} from 'react';
import DisplayList from "./DisplayList";
import './Styles.css'
import axios from "axios";

class ButtonDisplayBooks extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
            buttonText: 'Display Books',
            books: []
        }
        this.renderBooks = this.renderBooks.bind(this)
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='bookList'>
                <button className='showButton' onClick={this.renderBooks}>{this.state.buttonText}</button>
                {this.state.display ?
                    <DisplayList books={this.state.books} />  :
                    null
                }
            </div>
        );
    }

    renderBooks() {
        if (this.state.display) {
            axios.get("http://127.0.0.1:8000/playground/get_books/")
                .then(response => {
                    this.setState(prevState =>({
                        books: response.data.books
                    }))
                })
                .catch()
            this.setState(prevState => ({
                buttonText: 'Display Books',
                display: false
            }), () => console.log('HideBooks'))
        }
        else
            this.setState(prevState =>({
                buttonText: 'Hide Books',
                display: true
            }),() => console.log('GetBooks'))
    }
}

export default ButtonDisplayBooks;