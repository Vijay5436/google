import React,{useContext} from 'react'
import {BookContext} from './bookComponent';
import BookDetails from './bookDetails';

 const BookList=(props)=> {
     const {books}=useContext(BookContext);
    return books.length? (
<div>
    <ul>
        {books.map(book=>{
            return(<BookDetails book={book} key={book.id} />)
        })}
    </ul>
</div>
    ): (<div>No books are there</div> )
}
export default BookList;