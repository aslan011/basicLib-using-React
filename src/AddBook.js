import React, {Component} from 'react'

class AddBook extends Component {
    state = {
        title: undefined,
        author: undefined,
        read: 'Not read',
        id: undefined
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRead = (e) => {
        let status = 'Not read'
        if (e.target.value === 'Not read') {
            status = 'Read'}
        else {status = 'Not read'}
        this.setState({
            [e.target.id]: status
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBook(this.state)
        e.target.reset()
        this.setState({
            read: 'Not read'
        })
    }

    render(){
        return (
            <div className='formContainer'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <h4>Add a new book here!</h4>
                    <label htmlFor='title'>Title</label>
                    <input required type='text' id='title' onChange={this.handleChange}/><br />
                    <label htmlFor='author'>Author</label>
                    <input required type='text' id='author' onChange={this.handleChange}/><br />
                    <label htmlFor='read'>Read</label>
                    <input type='checkbox' id='read' value='Not read' onChange={this.handleRead}/><br />
                    <button id='submit'>Add book</button>
                </form>
            </div>
        )
    }
}

export default AddBook