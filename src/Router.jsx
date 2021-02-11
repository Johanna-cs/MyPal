import React, { useState, useMemo } from 'react'
import { Switch, Route } from "react-router-dom"

import Landing from './components/Connexion/Landing'
import Login from './components/Connexion/Login'
import Register from './components/Connexion/Register'
import Home from './components/Home'
import Profil from './components/Profil/Profil'
import BooksResult from './components/Books_Result/BooksResult'

import { ResultBookContext } from './components/Context/ResultBookContext'
import BookDetails from './components/Books_Result/BookDetails'
import BookStores from './components/Map/BookStores'

const Router = () => {

    //Appel des différents contexts qui vont partager ensuite l'information entre les composants concernés
    const [resultsBook, setResultsBook] = useState([])


    //Appel des différents providers de contexts qui vont ensuite distribuer l'information à travers le routeur
    const providerResultsBook = useMemo(() => ({resultsBook, setResultsBook}), [resultsBook, setResultsBook])


    return (
        <>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profil" component={Profil} />
            <Route exact path="/stores" component={BookStores} />

            <ResultBookContext.Provider value={providerResultsBook}>
                <Route exact path="/book/results" component={BooksResult} />
                <Route exact path="/book/details/:id" component={BookDetails} />
            </ResultBookContext.Provider>
        </Switch>
        </>
    )
}

export default Router