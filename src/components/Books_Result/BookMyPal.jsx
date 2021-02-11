import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import './bookmypal.css'
import { ResultBookContext } from '../Context/ResultBookContext'


const BookMyPal =(props) => {

    const bookID = props.id
    const { oneBook, setOneBook } = useContext(ResultBookContext)
    


    return (
        <>
            <div className='bookmypal'>
                <Link to= {{
                    pathname : `/book/details/${bookID}`}}
                    >
                    <div className='book_container'>
                        <div className='cover'>
                            <img className='mypal_cover' src="https://ec56229aec51f1baff1d-185c3068e22352c56024573e929788ff.ssl.cf1.rackcdn.com/attachments/large/3/5/9/006854359.jpg" alt='couverture du livre' height='128'/>
                        </div>
                        <div className='mypal_book_infos'>
                            <h4>{props.title}</h4>
                            <p>Editions : {props.edition}</p>
                            <h5>{props.author}</h5>
                        </div>
                    </div>
                </Link>
                    <div className='mypalStatus'>
                    <p>Read </p>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
                        </svg>
                        
                    </div>
            </div>

    
        </>
    )
}

export default BookMyPal 