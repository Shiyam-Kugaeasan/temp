const img = document.createElement('img');
const p = document.createElement('p');
const iframe = document.createElement('iframe');
const t = document.createElement('t');
const tagline = document.createElement('tagline'); 
const overview = document.createElement('overview'); 
const budget = document.createElement('budget'); 
const released = document.createElement('released'); 
const revenue = document.createElement('revenue');
const runtime = document.createElement('runtime');
const languages = document.createElement('languages');
const popularity = document.createElement('popularity');

function myFunction() {

  if (document.getElementById("select").value == "default"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove(); 
    languages.remove(); 
    popularity.remove();
  }
  if (document.getElementById("select").value == "spiderman"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();
    popularity.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "spiderman no way home",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "shang-chi"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Shang chi and the legend",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "into-the-spiderverse"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Spider-Man: Into the Spider-Verse",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "top-gun"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Top Gun: Maverick",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "el-camino"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "El Camino: A Breaking Bad Movie",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "pokemon"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Pokemon Detective Pikachu",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "jurassic-park"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Jurassic Park III",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "jjk"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Jujutsu Kaisen 0",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "infinity-war"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Avengers: Infinity War",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
  if (document.getElementById("select").value == "endgame"){
    img.remove();
    p.remove();
    iframe.remove();
    t.remove();
    tagline.remove();
    overview.remove();
    budget.remove();
    released.remove();  
    revenue.remove();
    runtime.remove();
    languages.remove();

    let response = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        include_adult: "false",
        query: "Avengers Endgame",
      }
    });
    
    response = response.then((moviesData) => {
      for (let movie of moviesData.data.results) {   
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: "d074056107be35c2b2df712431dcd31f",
            append_to_response: "videos",
          }
        }).then((movieData) => {

          const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          t.innerHTML = `${movie.title}`;
          tagline.innerHTML = `${movieData.data.tagline}`;
          overview.innerHTML = `${movie.overview}`;
          budget.innerHTML = `Budget: $${movieData.data.budget}`;
          released.innerHTML = `Status: ${movieData.data.status}`;
          p.innerHTML = `Release Date: ${movie.release_date}`;
          revenue.innerHTML = `Revenue: $${movieData.data.revenue}`;
          runtime.innerHTML = `Runtime: ${movieData.data.runtime} min`;
          languages.innerHTML = `Original Language: ${movieData.data.original_language}`;
          popularity.innerHTML = `Popularity Score: ${movieData.data.popularity}`;

          document.body.append(t);
          document.body.append(overview);
          document.body.append(tagline);
          document.body.append(budget);
          document.body.append(released);
          document.body.append(revenue);
          document.body.append(runtime);
          document.body.append(languages);
          document.body.append(popularity);
          document.body.append(p);
          document.body.append(img);
          document.body.append(iframe);
        });
      }
    });
  }
}