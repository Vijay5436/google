import React from 'react'
import { TheamContext } from '../maicomponent/theamContext'

export default function ThemeButton() {
    return (
        <TheamContext.Consumer>
                {
                    (context)=>{
                    const {toogleTheam}=context;
                    return(
                        <>
                        <button onClick={toogleTheam}>change Theme</button>
                        </>
                    )
                    }
                }
        </TheamContext.Consumer>
    )
}
