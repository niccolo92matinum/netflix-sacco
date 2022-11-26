import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav"
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen (){
    return(
<div className="homeScreen">

   <Nav></Nav>
 
   <Banner></Banner>

   <Row
   title='NETFLIX ORIGINALS'
   fetchUrl={requests.fetchNetflixOriginals}
   isLargeRow
   />
   <Row
   title='Trending now'
   fetchUrl={requests.fetchTrending}
   />
   <Row
   title='Top rated'
   fetchUrl={requests.fetchRated}
   />
   <Row
   title='Action movies'
   fetchUrl={requests.fetchActionMovies}
   />
   <Row
   title='Comedy movies'
   fetchUrl={requests.fetchComedyMovies}
   />
   v
   <Row
   title='Horror movies'
   fetchUrl={requests.fetchHorrorMovies}
   />
   <Row
   title='Romance movies'
   fetchUrl={requests.fetchRomanceMovies}
   />
   <Row
   title='Documentaries'
   fetchUrl={requests.fetchDocumentaries}
   />
  

</div>
    )
}

export default HomeScreen