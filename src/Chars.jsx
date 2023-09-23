import React, { Component } from 'react';

class PopularAnimeList extends Component {
  constructor() {
    super();
    this.state = {
      popularAnime: [],
    };
  }

  componentDidMount() {
    // Здесь вы можете указать URL Jikan API для получения популярных аниме
    const apiUrl = 'https://api.jikan.moe/v4/top/anime/';
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ popularAnime: data.top });
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }

  render() {
    const { popularAnime } = this.state;

    return (
      <div>
        <h2>Популярные аниме</h2>
        <ul>
          {popularAnime.map((anime) => (
            <li key={anime.mal_id}>
              <img src={anime.image_url} alt={anime.title} />
              <p>{anime.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PopularAnimeList;