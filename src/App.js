import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';


//tmdb_key = 59211ee7dfbe3349782aae60ada756dc

function App() {
  
  return (
    <div className="App">
      {/*Nav */}
      {/*Banner*/}
      <Nav/>
      <Banner/>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fecthTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
            
    </div>
  );
}

export default App;
