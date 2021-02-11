import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Menu from './Menu'
import ReturnButton from './Common/ReturnButton'
import { ResultBookContext } from './Context/ResultBookContext'


import book1 from './assets/icons/icnBook_1.svg'
import book2 from './assets/icons/icnBook_2.svg'
import book3 from './assets/icons/icnBook_3.svg'
import book4 from './assets/icons/icnBook_4.svg'
import book5 from './assets/icons/icnBook_5.svg'
import book6 from './assets/icons/icnBook_6.svg'



const Home = (props) => {

    const [newsBook, setNewsBook] = useState('news')
    const [allBook, setAllBook] = useState('all')
    const [thrillerBook, setThrillerBook] = useState('thriller')
    const [novelBook, setNovelBook] = useState('novel')
    const [comicsBook, setComicsBook] = useState('Marvel')
    const [fantasyBook, setFantasyBook] = useState('fantasy')

    const { typeBook, setTypeBook } = useContext(ResultBookContext)


    return (
    <div className='home_page'>
        <div className='home_header'>
            <div className='home_title'>
            <h3>Découvrir les catégories</h3>
            </div>
        </div>

            <div className='category_books'>
        <div className='row'>
            <div className='type_container'>
            <Link to=
                    {{ pathname : '/book/results'}}
                    style={{ textDecoration: "none" }}
                    onClick={() => setNewsBook() && setTypeBook(newsBook)}
                >
                <img className='logo_cat' src={book5} width="200" alt="book logo"/>
                <h4>Nouveautés</h4>
            </Link>
            </div>
            <div className='type_container'>
                <Link to=
                    {{ pathname : '/book/results'}}
                    style={{ textDecoration: "none" }}
                    onClick={() => setAllBook() && setTypeBook(allBook)}
                >
                <img className='logo_cat' src={book1} width="200" alt="book logo" />
                <h4>Tousles livres</h4>
                </Link>
            </div>
        </div>
        <div className='row'>
            <div className='type_container'>
            <Link to=
                    {{ pathname : '/book/results'}}
                    style={{ textDecoration: "none" }}
                    onClick={() => setThrillerBook() && setTypeBook(thrillerBook)}
                >
                <img className='logo_cat' src={book4} width="200" alt="book logo" />
                <h4>Thrillers</h4>
            </Link>
            </div>
            <div className='type_container'>
            <Link to=
                    {{ pathname : '/book/results'}}
                    style={{ textDecoration: "none" }}
                    onClick={() => setNovelBook() && setTypeBook(novelBook)}
                >
                <img className='logo_cat' src={book2} width="200" alt="book logo" />
                <h4>Romans</h4>
                </Link>
            </div>
        </div>

        <div className='row'>
            <div className='type_container'>
            <Link to=
                    {{ pathname : '/book/results'}}
                    style={{ textDecoration: "none" }}
                    onClick={() => setFantasyBook() && setTypeBook(fantasyBook)}
                >
                <img className='logo_cat' src={book6} width="200" alt="book logo" />
                <h4>Fantasy</h4>
            </Link>
            </div>
            </div>
        </div>
        <Menu />
    </div>
    
    )
}

export default Home