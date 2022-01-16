import React, {Component} from 'react';
import DisplayList from "./DisplayList";
import './Styles.css'
import axios from "axios";

class BookDisplay extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.getAllBooks()
    }

    render() {
        return (
            <main className='bookList'>
                    <DisplayList books={this.state.books} />
            </main>
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

}

export default BookDisplay;