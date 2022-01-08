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

    getAllBooks(){
        axios.get("http://127.0.0.1:8000/playground/get_all_data/")
                .then(response => {
                    this.setState(() =>({
                        books: response.data.data
                    }))
                })
                .catch()
    }

    updateState(name, state, message){
        this.setState(() => ({
                buttonText: name,
                display: state
            }), () => console.log(message))
    }

    renderBooks() {
        if (this.state.display) {
            this.getAllBooks()
            this.updateState('Display Books', false, 'GetBooks')
        }
        else
            this.updateState('Hide Books', true, 'HideBooks')
    }
}

export default ButtonDisplayBooks;