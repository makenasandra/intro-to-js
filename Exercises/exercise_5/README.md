**INT**

Write a function that takes an array of objects as a parameter, each of which represents a movie with the following properties: `title`, `director`, `year`, and `genre`. The function should return an object that contains the following properties:

- `numMovies`: the total number of movies in the array
- `numYears`: the number of unique years represented in the array
- `genreCounts`: an object that contains a count of how many movies are in each genre represented in the array.
Print the object.

## Suggestion ##
Use a for loop to iterate through the array and an if statement to check if each year or genre has already been counted. If it has not been counted, increment the corresponding count property in the returned object.


