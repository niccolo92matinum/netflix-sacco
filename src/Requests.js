 
 //store in env file
 const API_KEY = "299ef3bab671a0475200d9bfae54d928";
 const randomPage = Math.floor(Math.random()*10 + 1)


 const requests = {
    fetchBanner:`trending/movie/week?api_key=${API_KEY}`,
    fetchTrending:`trending/movie/week?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/movie?api_key=${API_KEY}&language=en-US&page=${randomPage}`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    fetchRated:`/movie/popular?api_key=${API_KEY}`
    

 }

 export default requests

// api to every movie => `/genre/movie/list?api_key=${API_KEY}`


