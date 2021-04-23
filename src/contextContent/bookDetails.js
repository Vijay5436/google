import React ,{useContext}from 'react'
import {BookContext} from './bookComponent';
const BookDetails=({book })=> {

    const{dispatch}=useContext(BookContext)
    return (
        <li onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
             <div>{book.title}</div>
             <div>{book.auther}</div>
        </li>
    )
}
export default BookDetails;