const users = require("./users");
const movies = require("./movies");
const restaurants = require("./restaurants");

// Function to generate movie recommendations based on user preferences
function generateMovieRecommendations(user) {
  let recommendations = [];
  // console.log("User Preferences for Movies:", user.preferences.movies);
  // Loop through each movie
  movies.forEach((movie) => {
    let preferenceScore = 0;

    // Check if the movie genre matches with any preferred genre of the user
    movie.genre.forEach((genre) => {
      if (user.preferences.movies.genre[genre]) {
        preferenceScore += user.preferences.movies.genre[genre];
        // recommendations.push(movie.name);
      }
    });
    // Check if any preferred actor is in the movie
    movie.actors.forEach((actor) => {
      if (user.preferences.movies.actors[actor]) {
        preferenceScore += user.preferences.movies.actors[actor];
      }
    });
    // Add the movie with its score to recommendations
    recommendations.push({ name: movie.name, score: preferenceScore });
  });

  // Sort recommendations based on preference scores (descending order)
  recommendations.sort((a, b) => b.score - a.score);

  // Extract only movie names from recommendations
  const sortedMovies = recommendations.map((movie) => movie.name);
  return sortedMovies;

  // return recommendations;
}

// Function to generate restaurant recommendations based on user preferences
function generateRestaurantRecommendations(user) {
  let recommendations = [];

  // Loop through each restaurant
  restaurants.forEach((restaurant) => {
    let preferenceScore = 0;
    // Check if the restaurant cuisine matches with any preferred cuisine of the user
    restaurant.cuisine.forEach((cuisine) => {
      if (user.preferences.restaurants.cuisine[cuisine]) {
        preferenceScore += user.preferences.restaurants.cuisine[cuisine];
      }
    });
    // Check if any preferred feature is available in the restaurant
    restaurant.features.forEach((feature) => {
      if (user.preferences.restaurants.features[feature]) {
        preferenceScore += user.preferences.restaurants.features[feature];
      }
    });
    // Add the restaurant with its score to recommendations
    recommendations.push({ name: restaurant.name, score: preferenceScore });
  });
  // Sort recommendations based on preference scores (descending order)
  recommendations.sort((a, b) => b.score - a.score);

  // Extract only restaurant names from recommendations
  const sortedRestaurants = recommendations.map(
    (restaurants) => restaurants.name
  );
  return sortedRestaurants;
}

// Function to generate recommendations for a given user
function generateRecommendations(userId) {
  const user = users.find((user) => user.id === userId);

  if (!user) {
    // return [movies, restaurants];
    return { movieRecommendations: [], restaurantRecommendations: [] };
  }

  const movieRecommendations = generateMovieRecommendations(user);
  const restaurantRecommendations = generateRestaurantRecommendations(user);
  
  return {
    userName: user.name,
    movieRecommendations:movieRecommendations,
    restaurantRecommendations: restaurantRecommendations,
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
