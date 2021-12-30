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
            posts: []
        }
        this.renderBooks = this.renderBooks.bind(this)
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/playground/get_books/")
            .then(response => {
                console.log(response)
            })
            .catch()
    }

    render() {
        return (
            <div className='bookList'>
                <button className='showButton' onClick={this.renderBooks}>{this.state.buttonText}</button>
                {this.state.display ?
                    <DisplayList />  :
                    null
                }
            </div>
        );
    }

    renderBooks() {
        if (this.state.display)
            this.setState(prevState =>({
                buttonText: 'Display Books',
                display: false
            }), () => console.log('HideBooks'))
        else
            this.setState(prevState =>({
                buttonText: 'Hide Books',
                display: true
            }),() => console.log('GetBooks'))
    }
}

export default ButtonDisplayBooks;