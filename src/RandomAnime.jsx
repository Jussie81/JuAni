import React, { useState } from 'react';
import axios from 'axios';

const RandomAnime = () => {
  const [anime, setRandomAnime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomAnime = () => {
    setLoading(true);
    setError(null);

    axios.get('https://api.jikan.moe/v4/random/anime')
      .then(response => {
        setRandomAnime(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Ошибка при загрузке данных');
        setLoading(false);
      });
  }

  return (
    <div className="text-center">
      <h1>Random anime</h1>

      <button className="btn btn-wide" onClick={getRandomAnime}>Random it</button>

      {loading && <p><span className="loading loading-ring loading-lg"></span></p>}

      {error && <p>{error}</p>}

      {anime && (
        <div>
            <p>{anime.title}</p>
            <p>Score: {anime.score}/10</p>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={anime.images.jpg.image_url} className="w-auto mx-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={anime.images.jpg.image_url} className="w-auto mx-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={anime.images.jpg.image_url} className="w-auto mx-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={anime.images.jpg.image_url} className="w-auto mx-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      </div>
      )}
    </div>
  );
}

export default RandomAnime;