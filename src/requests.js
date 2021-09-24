 const API_KEY = "a57170daa3a0b4b539b331552be681b5";

 const requests = {
   fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  //  fetchNetflixOriginals: `/discover?api_key=${API_KEY}&with_networks=213`,  //dont include this...find an alternative
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  }

  export default requests; 