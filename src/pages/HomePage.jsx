import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const mockMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    image: "https://via.placeholder.com/300x400?text=The+Dark+Knight",
    description: "When the menace known as the Joker wreaks havoc on Gotham City..."
  },
  {
    id: 2,
    title: "Inception",
    image: "https://via.placeholder.com/300x400?text=Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology..."
  },
  {
    id: 3,
    title: "Interstellar",
    image: "https://via.placeholder.com/300x400?text=Interstellar",
    description: "A team of explorers travel through a wormhole in space..."
  }
];

function HomePage() {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Popular Movies</h1>
        <div className="movies-grid">
          {mockMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <Link to={`/movie/${movie.id}`} className="btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;