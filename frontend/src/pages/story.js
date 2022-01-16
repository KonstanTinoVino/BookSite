import React, {Component} from 'react';
import axios from "axios";

class Story extends Component{

    constructor() {
        super();
        this.state = {
            story_ID: '',
            description: ''
        }
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');
        console.log(id)
        this.setState({
            story_ID: id
        });
        this.getAllBooks(id)
    }

    getAllBooks(id){
        let url = `http://127.0.0.1:8000/playground/get_book_description/${id}`;
        console.log(url)
        axios.get(url)
            .then(response => {
                this.setState(() =>({
                    description: response.data
                }))
            })
            .catch()
    }

    render(props) {
        return (
            <div className="testimonial-grid">
                <p>{this.state.description}</p>
            </div>
        );
    }

}

export default Story;
