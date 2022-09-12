import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import EpisodeSelect from 'hooks/selectEpisode';
import PropTypes from 'prop-types';

const TvGinformation = (props) => {
    const { poster, title, genres, year, nbrSeasons, overview, director, producer, season_name, episode_count } = props;
    return (
        <div style={{ backgroundImage: `url(${process.env.REACT_APP_BASE_URL_IMG}/${poster})` }}>
            <Typography variant='h2' style={{ marginLeft: '10%', color: 'white' }}> {title}</Typography>
            <div className='tags' style={{ marginLeft: '10%' }}>
                {genres.map((genre) => (
                    <Button key={genres.indexOf(genre)} variant="contained" style={{ backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '1%' }} >{genre}</Button>
                ))}
                <Button variant="contained" style={{ backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '1%' }}>{year}</Button>
                <Button variant="contained" style={{ backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '1%' }}>{`${nbrSeasons} saisons`}</Button>
            </div>
            <div className='creators' style={{ marginLeft: '65%', marginRight: '5%' }}>
                <div className='creator' style={{ display: 'flex' }}>
                    <p className='creator-title' style={{ color: 'rgb(58, 58, 58)  ', fontSize: '1.2rem', fontWeight: '500', marginBottom: 0 }}>Director:&nbsp; </p>
                    <p className='creator-name' style={{ color: 'rgba(255,255,255,0.7)  ', textTransform: 'capitalize', fontSize: '1.1rem', marginBottom: 0 }}>{director.join(', ')} </p>
                </div>
                <div className='creator' style={{ display: 'flex' }}>
                    <p className='creator-title' style={{ color: 'rgb(58, 58, 58)  ', fontSize: '1.2rem', fontWeight: '500', marginBottom: 0 }}>Producer:&nbsp; </p>
                    <p className='creator-name' style={{ color: 'rgba(255,255,255,0.7)  ', textTransform: 'capitalize', fontSize: '1.1rem', marginBottom: 0 }}>{producer.join(', ')} </p>
                </div>
            </div>
            <p className='tv-presentation' style={{ marginLeft: '10%', color: 'rgba(255,255,255,0.85)', width: '40%', fontFamily: 'serif', fontWeight: 550, fontSize: '1.05rem' }}>
                {overview}
            </p>
            <Button variant="contained" style={{ backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '10%', fontWeight: '550', padding: '0.625% 2.5%' }}> <CheckIcon />&nbsp; Watchlist </Button>
            <div className='episodes' style={{ marginTop: ' 12.5% ', display: 'flex' }}>
                <Typography variant='h2' style={{ marginLeft: '10%', color: 'white' }}> Episodes</Typography>
                {EpisodeSelect(`${season_name}(${episode_count} episodes)`, [...new Array(episode_count)].map((_, i) => `Episode ${i + 1}`))}
            </div>
        </div>
    )
};

TvGinformation.propTypes = {
    poster: PropTypes.instanceOf(String).isRequired,
    title: PropTypes.instanceOf(String).isRequired,
    genres: PropTypes.instanceOf(Array).isRequired,
    year: PropTypes.instanceOf(String).isRequired,
    nbrSeasons: PropTypes.instanceOf(Number).isRequired,
    overview: PropTypes.instanceOf(String).isRequired,
    director: PropTypes.instanceOf(Array).isRequired,
    producer: PropTypes.instanceOf(Array).isRequired,
    season_name: PropTypes.instanceOf(String).isRequired,
    episode_count: PropTypes.instanceOf(Number).isRequired
};

export default TvGinformation;