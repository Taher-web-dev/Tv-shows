import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TvGinformation from "./Show.styles";
import { thunkCurrentTvShow } from "redux/currentTv.slice";
import { useSelector, useDispatch } from "react-redux";
import Alert from 'react-bootstrap/Alert';

const Show = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { state } = location;
    const { id } = state;
    const currentTv = useSelector((state) => state.currentTv);
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
    const season_name = dataL > 0 ? "Season 1" : undefined;
    const episode_count = dataL > 0 ? data.number_of_episodes : undefined;

    useEffect(() => dispatch(thunkCurrentTvShow(id)), []);
    return (
        <div>
            <Alert variant={'warning'} style={{ display: error ? 'block' : 'none' }}>
                {error}
            </Alert>
            {dataL > 0 && <TvGinformation poster={poster} title={title} genres={genres} year={year} nbrSeasons={nbrSeasons} overview={overview} director={director} producer={producer} season_name={season_name} episode_count={episode_count} />}
        </div>
    )
};

export default Show;