import React, { Component } from 'react';
import axios from 'axios';

class AnimeSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: '',           // Запрос пользователя
      animeList: [],       // Список найденных аниме
      loading: false,      // Флаг загрузки данных
      error: null          // Ошибка, если что-то пошло не так
    };
  }

  // Обработчик изменения поля ввода
  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  }

  // Обработчик отправки запроса
  handleSearch = () => {
    const { query } = this.state;
    // Выполняем запрос к API Jikan
    axios.get(`https://api.jikan.moe/v4/anime?q=${query}`)
      .then((response) => {
        this.setState({
          animeList: response.data.data,
          loading: false,
          error: null
        });
      })
      .catch((error) => {
        this.setState({
          animeList: [],
          loading: false,
          error: 'Ошибка при загрузке данных'
        });
      });
    this.setState({ loading: true });
  }

  render() {
    const { query, animeList, loading, error } = this.state;

    return (
      <div className='mx-auto text-center mt-10'>
        <h1 className="mb-10">Search Anime</h1>
        <input type="text" placeholder="Type here" className="input w-full max-w-xs" onChange={this.handleInputChange} />
          
        <button  className="btn ml-10" onClick={this.handleSearch}>Search</button>

        {loading && <p>Загрузка...</p>}
        {error && <p>{error}</p>}

        <ul>
          {animeList.map((anime) => (
            <li key={anime.mal_id}>
                <div className="card card-side bg-base-100 shadow-xl mt-10 ml-10">
                <figure><img className='w-full' src={anime.images.jpg.image_url} alt="Anime"/></figure>
                <div className="card-body h-50 w-20">
                    <h2 className="card-title">{anime.title}</h2>
                    <p>Score: {anime.score}/10</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
                </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnimeSearch;