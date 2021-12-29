import React, {Component} from 'react';
import DisplayList from "./DisplayList";

class ButtonDisplayBooks extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
            buttonText: 'Display Books'
        }
        this.renderBooks = this.renderBooks.bind(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.renderBooks}>{this.state.buttonText}</button>
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