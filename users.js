const users = [
  {
    id: 1,
    name: "User A",
    preferences: {
      movies: {
        genre: {
          Action: 5, // User A prefers action movies
          Crime: 4, // User A prefers crime movies
        },
        actors: {
          "Marlon Brando": 5, // User A prefers actor
          "Christian Bale": 5, // User A prefers actor
        },
      },
      restaurants: {
        cuisine: {
          Indian: 5, // User A prefers Indian cuisine
          Punjabi: 4, // User A likes Punjabi cuisine
          Mughlai: 4, // User A is okay with Mughlai cuisine
        },
        features: {
          "Vegetarian Options": 5, // User A prefers vegetarian features option
          "Outdoor Seating": 4,
          Buffet: 3, // User A is okay with Buffet
        },
      },
    },
  },
  {
    id: 2,
    name: "User B",
    preferences: {
      movies: {
        genre: {
          Comedy: 5, // User B prefers Comedy movies
          Romance: 4, // User B prefers Romantic movies
        },
        actors: {
          "Salman Khan": 5, // User B prefers actor
          "Robin Wright": 3, // User B prefers actor
        },
      },
      restaurants: {
        cuisine: {
          Mughlai: 5, // User B prefers Mughlai cuisine
          Punjabi: 4, // User B likes Punjabi cuisine
        },
        features: {
          "Family Friendly": 5, // User A prefers vegetarian features option
          Takeout: 4,
        },
      },
    },
  },
  {
    id: 3,
    name: "User C",
    preferences: {
      movies: {
        genre: {
          Sports: 5, // User C prefers Soprts movies
          Drama: 4, // User C prefers Drama movies
        },
        actors: {
          "Tim Robbins": 5, // User C prefers actor
          "Aamir Khan": 4, // User C prefers actor
        },
      },
      restaurants: {
        cuisine: {
          Punjabi: 5, // User C prefers Punjabi cuisine
          Indian: 4, // User C likes Indian cuisine
        },
        features: {
          Delivery: 5, // User C prefers Delivery features option
          "Fine Dining": 4,
        },
      },
    },
  },
  // Other users...
];

module.exports = users;
