import React, { Component } from 'react';
import './App.css';
import Books from './Books.js'
import AddBook from './AddBook.js'

class App extends Component {
  state = {
    books: [
      {title: 'War and Peace', author:'This guy', read:'Not read', id:'1'},
      {title: '48 laws of Power', author:'That guy', read:'Read', id:'2'},
      {title: 'Wind and shine', author:'Another guy', read:'Not read', id:'3'},
      {title: 'Billy the Joe', author:'What guy', read:'Read', id:'4'}
    ]
  }

  //remember, below we have to use a arrow function because we need to bind this
  deleteBook = (id) => {
    const books = this.state.books.filter(book => {
      return id !== book.id 
    })

    this.setState({
      books
    })
  }

  addBook = (newBook) => {
    newBook.id = Math.random()
    let books = [...this.state.books, newBook]
    this.setState({
      books: books
    })
  }

  toggleRead = (book) => {
    book.read === 'Read' ? (
      book.read = 'Not read'
    ) : (
      book.read = 'Read'
    )
    this.setState({
     book
   })
  }

  render(){
  return (
    <div className="App">
      <h1>Library (using React)</h1>
      <Books books={this.state.books} deleteBook={this.deleteBook} toggleRead={this.toggleRead}/>
      <AddBook addBook={this.addBook}/>
    </div>
  );
  }
}

export default App;












