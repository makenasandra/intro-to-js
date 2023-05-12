const movies = [
    {
      title: 'John Wick',
      director: 'Chad Stahelski',
      year: 2015,
      genre: 'Thriller'
    },
    {
      title: '8 Mile',
      director: 'Curtis Hanson',
      year: 2002,
      genre: 'Music'
    },
    {
      title: 'Avatar',
      director: 'James Cameron',
      year: 2010,
      genre: 'Fantasy'
    },
    {
      title: 'Spider-Man',
      director: 'Sam Raimi',
      year: 2002,
      genre: 'Fantasy'
    },
    {
      title: 'Bohemian Rhapsody',
      director: 'Bryan Singer, Dexter Fletcher',
      year: 2018,
      genre: 'Thriller'
    },
  ]


function printMovieInfo(array) {

    let filmsInfo = {numMovies: array.length};

    let years = [];

    let genreCounts = {};

    for (let index = 0; index < array.length; index++) {

      let isPresent;
      
      for (const key in genreCounts) {
        if ( key == array[index].genre) {
          isPresent = true; 
        } 
      }

      if (isPresent) {
        genreCounts[array[index].genre] += 1;
        // console.log(`${array[index].genre} plus one`);
        // console.log(genreCounts);
      } else {
        genreCounts[array[index].genre] = 1;
        // console.log(`${array[index].genre} added`);
        // console.log(genreCounts);
      }   

      // add years to years array
      years.push(array[index].year);
    }

    //Find number of unique years
    years = [... new Set(years)];

    //add number of unique years
    filmsInfo["numYears"] = years.length;

    //add genre counts
    filmsInfo["genreCounts"] = genreCounts;

    console.log(filmsInfo)

}

printMovieInfo(movies);

