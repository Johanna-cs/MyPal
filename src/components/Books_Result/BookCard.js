import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import './books.css'
import { Image } from 'react-bootstrap';
import { ResultBookContext } from '../Context/ResultBookContext'


const BookCard =(props) => {

    const bookID = props.id
    const { oneBook, setOneBook } = useContext(ResultBookContext)
    


    return (
        <>
            <div className='bookCard' key={bookID}>
                <Link to= {{
                    pathname : `/book/details/${bookID}`}}
                    >
                    <div className='bookCard_container'>
                        <div className='book_cover'>
                            <Image src={props.cover} alt='couverture du livre' height='155px'/>
                        </div>
                        <div className='book_infos'>
                            <h4>{props.title}</h4>
                            <p>Editions : {props.edition}</p>
                            <h5>{props.author}</h5>
                        </div>
                    </div>
                </Link>
                    <div className='bookStatus'>
                    <p>Add to my pal </p>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                            <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            
                        </svg>
                        
                    </div>
            </div>

    
        </>
    )
}

export default BookCard 