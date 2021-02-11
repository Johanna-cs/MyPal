import React, { useEffect, useContext, useState } from 'react'
import Axios from 'axios'
import './books.css'
import { Image } from 'react-bootstrap';
import { ResultBookContext } from '../Context/ResultBookContext'
const API_KEY = 'AIzaSyDir9VGal9PmrL-cszDsDGVOqsYXhhKlIU'

const BookDetails =(props) => {

    const bookID = props.match.params.id
    const [oneBook, setOneBook] = useState([{}])

    // const {resultsBook, setResultsBook} = useContext(Result_Book_Context)


    // async function asyncFunc() {
    //     try {
    //       // fetch data from a url endpoint
    //       const response = await Axios.get(`https://www.googleapis.com/books/v1/volumes/${bookID}`);
    //       const getBook = await (setOneBook(response.data.items));
          
    //       return getBook;
    //     } catch (error) {
    //       console.log(error) // catches both errors
    //       console.log(oneBook)
    //       console.log(bookID)
          
    //     }
    //   }
    const getOneBook = () => {
        Axios
        .get(`https://www.googleapis.com/books/v1/volumes/${bookID}`)
        .then(res => setOneBook(res.data.items))
        .catch(error => console.log(error))
        

    }
    console.log(bookID)
    console.log(oneBook)

    useEffect(() => {
        getOneBook()
        
    }, [])
  
    return (
        <>
         
            <div >
                { oneBook.map(e => (
                    <div  key={bookID}>
                        <div className='book_cover'>
                            {/* <Image className='bookCover' src={e.volumeInfo.imageLinks.thumbnail} alt='couverture du livre' thumbnail/> */}
                        </div>
                        <div className='book_infos'>
                            <h4>{e.volumeInfo.title}</h4>
                            <p>Editions : {e.volumeInfo.publisher}</p>
                            <h5>{e.volumeInfo.authors}</h5>
                        </div>
                        <p>{e.category}</p>
                        
                        <div className='bookResume'>
                            <p>{e.description}</p>
                        </div>
                    </div>
                ))
                }
            </div>

    
        </>
    )
}

export default BookDetails