import React, { useEffect, useContext } from 'react'
import Axios from 'axios'
import './books.css'
import Menu from '../Menu'
import ReturnButton from '../Common/ReturnButton'
import BookCard from './BookCard'
import { ResultBookContext } from '../Context/ResultBookContext'
const API_KEY = 'AIzaSyDir9VGal9PmrL-cszDsDGVOqsYXhhKlIU'

const BooksResult = (props) => {
    
    const typeBook = props.typeBook

    const {resultsBook, setResultsBook} = useContext(ResultBookContext)
    // const [bookList, setBookList] = useState([])

    async function asyncFunc() {
        try {
          // fetch data from a url endpoint
          const response = await Axios.get(`https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=byron&key=${API_KEY}`);
          const getBook = await (setResultsBook(response.data.items));
      
          return getBook;
        } catch (error) {
          console.log(error); // catches both errors
          console.log(resultsBook)
        }
      }

    useEffect(() => {
        asyncFunc()
    }, [])
  
    
    return (
      <>
      <ReturnButton />
      <div className='resultHeader'>
        <h3>Resultas de la recherche : </h3>
      </div>        
    
    <Menu />
        <div className='bookResult'>
        {
           resultsBook.map(e => (
                <BookCard
                    id={e.id} 
                    title={e.volumeInfo.title} 
                    cover={e.volumeInfo.imageLinks.thumbnail}
                    author={e.volumeInfo.authors}
                    category={e.categories} 
                    resume={e.description} 
                    edition={e.volumeInfo.publisher}/>
            ))
        }
    </div>
    </>
    )
}

export default BooksResult