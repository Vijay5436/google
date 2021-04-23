import React from 'react'
import { v4 as uuidv4 } from 'uuid';

 export const BookReducer=(state,action)=>{

    switch(action.type) {
        case 'ADD_BOOK':
            return [...state,{
                title:action.book.title,
                auther:action.book.auther,
                id:uuidv4(),
            }]
        case 'REMOVE_BOOK':
            return state.filter(book=>book.id !==  action.id)
        default :
        return state;
    }

}

//export default BookReducer;