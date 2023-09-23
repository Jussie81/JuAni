import React, { Component } from 'react';
import axios from 'axios';

export default class AnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeList: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'https://api.jikan.moe/v4/top/anime';

    axios.get(apiUrl)
      .then(response => {
        this.setState({
          animeList: response.data.data,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error,
          loading: false,
        });
      });
  }

  render() {
    const { animeList, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h1>Popular Anime</h1>
        <ul>
          {animeList.map(anime => (
            <li key={anime.id}>
              <h2>{anime.title}</h2>
              <p>Synopsis: {anime.synopsis}</p>
              {/* Другие поля, которые вы хотите отобразить */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

