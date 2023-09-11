import React from 'react';
import Banner from '../Banner';
import './HomeScreen.css';
import Nav from '../Nav';
import requests from '../Requests';
import Rows from '../Rows';
import './HomeScreen.css';

function HomeScreen() {
    return (
        <div className='homescreen'>
            { /* NavBar */}
            <Nav />
            

            { /* Banner */}
            <Banner/>

            { /* Rows */}
            <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

        </div>        
        );
}

export default HomeScreen;