import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { thunkCurrentTvShow } from 'redux/currentTv.slice';
import { useSelector, useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { thunkEpisodes } from 'redux/episodes.slice';
import TvGinformation, { MultiActionAreaCard } from './Show.styles';

const Show = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;
  const { id } = state;
  const mode = useSelector((state) => state.theme.mode);
  const currentTv = useSelector((state) => state.currentTv);
  const episodesState = useSelector((state) => state.episodes);
  let episodes = episodesState.data[id];
  if (episodes && episodes.length > 0) {
    episodes = [...new Map(episodes.map((item) => [item.episode_number, item])).values()];
  }
  const { data, error } = currentTv;
  const dataL = Object.keys(data).length;
  const poster = dataL > 0 ? data.poster_path : undefined;
  const title = dataL > 0 ? data.original_name : undefined;
  const genres = dataL > 0 ? data.genres.map((genre) => genre.name) : undefined;
  const year = dataL > 0 ? data.first_air_date.split('-')[0] : undefined;
  const nbrSeasons = dataL > 0 ? data.number_of_seasons : undefined;
  const overview = dataL > 0 ? data.overview : undefined;
  const director = dataL > 0 ? data.created_by.map((creator) => creator.name) : undefined;
  const producer = dataL > 0 ? data.production_companies.map((comp) => comp.name) : undefined;
  const seasonName = dataL > 0 ? 'Season 1' : undefined;
  const episodeCount = dataL > 0 ? data.number_of_episodes : undefined;

  useEffect(() => dispatch(thunkCurrentTvShow(id)), []);
  useEffect(() => dispatch(thunkEpisodes(id, episodeCount)), [currentTv]);
  return (
    <div style={{ backgroundColor: mode === 'browser' ? 'white' : mode }}>
      <Alert variant="warning" style={{ display: error ? 'block' : 'none' }}>
        {error}
      </Alert>
      {dataL > 0 && (
        <TvGinformation
          poster={poster}
          title={title}
          genres={genres}
          year={year}
          nbrSeasons={nbrSeasons}
          overview={overview}
          director={director}
          producer={producer}
          seasonName={seasonName}
          episodeCount={episodeCount}
        />
      )}
      <div style={{ width: '80%', marginLeft: '10%' }}>
        {(episodes && episodes.length > 0) && (episodes.map((episode) => (

          <MultiActionAreaCard
            key={episode.episode_number}
            title={episode.name}
            description={episode.overview}
            imgPath={episode.still_path}
            episodeNumber={episode.episode_number}
          />
        )))}
      </div>
    </div>
  );
};

export default Show;
