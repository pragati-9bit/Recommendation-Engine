const movies = require('./movies');
const restaurants = require('./restaurants');
const users = require('./users');

// Step 1: Feature Representation

// No specific implementation needed here, as the data already contains features for movies and restaurants.

// Step 2: User Preferences

// For each user, calculate their preferences based on ratings
const userPreferences = {};
users.forEach(user => {
    userPreferences[user.id] = {
        movies: {},
        restaurants: {}
    };

    // Movies
    Object.keys(user.preferences.movies).forEach(movieId => {
        userPreferences[user.id].movies[movieId] = user.preferences.movies[movieId];
    });

    // Restaurants
    Object.keys(user.preferences.restaurants).forEach(restaurantId => {
        userPreferences[user.id].restaurants[restaurantId] = user.preferences.restaurants[restaurantId];
    });
});
// Print out the genre for each movie in the movies dataset
console.log("Genre for each movie:");
movies.forEach(movie => {
    console.log(`${movie.name}:`, movie.genre);
});

// Step 3: Feature Vectorization
// Not needed for this example as the data already has features.

// Step 4: User Profile Creation

// Calculate user profile based on their preferences
const userProfile = {};
Object.keys(userPreferences).forEach(userId => {
    userProfile[userId] = {};

    // For movies
    userProfile[userId].movies = {};
    Object.keys(userPreferences[userId].movies).forEach(movieId => {
        if (userPreferences[userId].movies[movieId] > 0) {
            const movie = movies.find(movie => movie.id === parseInt(movieId));
            userProfile[userId].movies[movieId] = movie;
        }
    });

    // For restaurants
    userProfile[userId].restaurants = {};
    Object.keys(userPreferences[userId].restaurants).forEach(restaurantId => {
        if (userPreferences[userId].restaurants[restaurantId] > 0) {
            const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(restaurantId));
            userProfile[userId].restaurants[restaurantId] = restaurant;
        }
    });
});
console.log("User A's profile:", userProfile[1]);
// Step 5: Recommendation
// A simplified example to recommend items based on user profile

function recommendItems(userId, itemType) {
    const profile = userProfile[userId][itemType];
    const recommendedItems = [];

    // Check if user profile and items exist
    if (profile && Object.keys(profile).length > 0) {
        // Extract genres/cuisines of rated items
        const ratedFeatures = Object.values(profile).map(item => {
            if (item && (itemType === 'movies' && item.genre)) {
                return item.genre;
            } else if (item && (itemType === 'restaurants' && item.cuisine)) {
                return item.cuisine;
            } else {
                return [];
            }
        }).flat();
        console.log("Features rated by the user:", ratedFeatures);

        // Filter items based on rated features
        if (itemType === 'movies') {
            recommendedItems.push(...movies.filter(movie => movie.genre.some(genre => ratedFeatures.includes(genre))).slice(0, 3));
        } else {
            recommendedItems.push(...restaurants.filter(restaurant => restaurant.cuisine.some(cuisine => ratedFeatures.includes(cuisine))).slice(0, 3));
        }
    } else {
        console.log("User has not rated any items of type", itemType);
    }

    return recommendedItems;
}



// Example: Recommend movies for User A
const recommendedMoviesForUserA = recommendItems(1, 'movies');
console.log("Recommended movies for User A:", recommendedMoviesForUserA);

// Example: Recommend restaurants for User A
const recommendedRestaurantsForUserA = recommendItems(1, 'restaurants');
console.log("Recommended restaurants for User A:", recommendedRestaurantsForUserA);

// Example: Recommend movies for User B
const recommendedMoviesForUserB = recommendItems(2, 'movies');
console.log("Recommended movies for User B:", recommendedMoviesForUserB);

// Example: Recommend restaurants for User B
const recommendedRestaurantsForUserB = recommendItems(2, 'restaurants');
console.log("Recommended restaurants for User B:", recommendedRestaurantsForUserB);

// Example: Recommend movies for User C
const recommendedMoviesForUserC = recommendItems(3, 'movies');
console.log("Recommended movies for User C:", recommendedMoviesForUserC);

// Example: Recommend restaurants for User C
const recommendedRestaurantsForUserC = recommendItems(3, 'restaurants');
console.log("Recommended restaurants for User C:", recommendedRestaurantsForUserC);