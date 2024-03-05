const users = require("./users");
const movies = require("./movies");
const restaurants = require("./restaurants");

// Function to generate movie recommendations based on user preferences
function generateMovieRecommendations(user) {
  let recommendations = [];
  // console.log("User Preferences for Movies:", user.preferences.movies);
  // Loop through each movie
  movies.forEach((movie) => {
    // console.log("Checking Movie:", movie.name);
    // Check if the movie genre matches with any preferred genre of the user
    movie.genre.forEach((genre) => {
      if (user.preferences.movies[genre] > 3) {
        // console.log("Genre Matched:", genre);
        recommendations.push(movie.name);
      }
    });
    // Check if any preferred actor is in the movie
    movie.actors.forEach((actor) => {
      if (user.preferences.movies.actors[actor] > 3) {
        // console.log("Actor Matched:", actor);
        recommendations.push(movie.name);
      }
    });
  });

  return recommendations;
}

// Function to generate restaurant recommendations based on user preferences
function generateRestaurantRecommendations(user) {
  let recommendations = [];

  // Loop through each restaurant
  restaurants.forEach((restaurant) => {
    // Check if the restaurant cuisine matches with any preferred cuisine of the user
    restaurant.cuisine.forEach((cuisine) => {
      if (user.preferences.restaurants[cuisine] > 3) {
        recommendations.push(restaurant.name);
      }
    });
    // Check if any preferred feature is available in the restaurant
    restaurant.features.forEach((feature) => {
      if (user.preferences.restaurants.features[feature] > 3) {
        recommendations.push(restaurant.name);
      }
    });
  });

  return recommendations;
}

// Function to generate recommendations for a given user
function generateRecommendations(userId) {
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return [movies, restaurants];
  }

  const movieRecommendations = generateMovieRecommendations(user);
  const allMovies = movies.map((movie) => movie.name); // Get all movie names

  const restaurantRecommendations = generateRestaurantRecommendations(user);
  const allRestaurants = restaurants.map((restaurant) => restaurant.name); // Get all restaurant names

  // Concatenate preference-matched recommendations with all movies/restaurants
  const finalMovieRecommendations = [...movieRecommendations, ...allMovies];
  const sortedMovie = [...new Set(finalMovieRecommendations)]
//   console.log("sorted",sortedMovie)
  const finalRestaurantRecommendations = [
    ...restaurantRecommendations,
    ...allRestaurants,
  ];
  const sortedRestaurants = [...new Set(finalRestaurantRecommendations)]
  return {
    userName: user.name,
    movieRecommendations: sortedMovie,
    restaurantRecommendations: sortedRestaurants,
  };
}

// Example: Generate recommendations for User A (id: 1)
const userARecommendations = generateRecommendations(1);
console.log(userARecommendations);

// Example: Generate recommendations for User B (id: 2)
const userBRecommendations = generateRecommendations(2);
console.log(userBRecommendations);

// Example: Generate recommendations for User C (id: 3)
const userCRecommendations = generateRecommendations(3);
console.log(userCRecommendations);
