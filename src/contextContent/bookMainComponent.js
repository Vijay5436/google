import React,{useState,useContext} from 'react'
import {BookContext} from './bookComponent';
const BookForm=()=> {
    const {dispatch}=useContext(BookContext);
    const[title,setTitle]=useState('')
    const [auther,setAuther]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type:'ADD_BOOK',book:{
            title,auther
        }})
        setTitle('');
        setAuther('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type='text' value={auther} onChange={(e)=>setAuther(e.target.value)} />
                <input type='submit' value='Add Book' />
            </form>
            
        </div>
    )
}
export default BookForm;