import React from 'react'
import Bin from './bin.png'

const Books = ({books, deleteBook, toggleRead}) => {
    return (
        <div className='container'>
           {books.map(book =>
            <div className='books' key={book.id}>
                <button id='delete' onClick={ () => {deleteBook(book.id)}}><img src={Bin} alt="Bin"/></button>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <p id='toggle' onClick={ () => {toggleRead(book)}}>{book.read}</p>
            </div>
           )}
        </div>
    )
}

export default Books