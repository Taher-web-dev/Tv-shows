/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const EpisodeSelect = (title, episodes) => {
  const theme = createTheme({
    palette: {
      text: {
        secondary: '#fff',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id="select-episode"
        sx={{ width: 300, '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, '.css-i4bv87-MuiSvgIcon-root': { color: 'white' } }}
        style={{ marginLeft: '42.5%', marginRight: '10%' }}
        options={episodes}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>

            {option}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={title}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    </ThemeProvider>
  );
};

const TvGinformation = (props) => {
  const {
    poster,
    title,
    genres,
    year,
    nbrSeasons,
    overview,
    director,
    producer,
    seasonName,
    episodeCount,
  } = props;
  return (
    <div style={{ backgroundImage: `url(${process.env.REACT_APP_BASE_URL_IMG}/${poster})` }}>
      <Typography variant="h2" style={{ marginLeft: '10%', color: 'white' }}>
        {' '}
        {title}
      </Typography>
      <div className="tags" style={{ marginLeft: '10%' }}>
        {genres.map((genre) => (
          <Button key={genres.indexOf(genre)} variant="contained" style={{ backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '1%' }}>{genre}</Button>
        ))}
        <Button variant="contained" style={{ backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '1%' }}>{year}</Button>
        <Button variant="contained" style={{ backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '1%' }}>{`${nbrSeasons} saisons`}</Button>
      </div>
      <div className="creators" style={{ marginLeft: '65%', marginRight: '5%' }}>
        <div className="creator" style={{ display: 'flex' }}>
          <p
            className="creator-title"
            style={{
              color: 'rgb(58, 58, 58)  ', fontSize: '1.2rem', fontWeight: '500', marginBottom: 0,
            }}
          >
            Director:&nbsp;
          </p>
          <p
            className="creator-name"
            style={{
              color: 'rgba(255,255,255,0.7)  ', textTransform: 'capitalize', fontSize: '1.1rem', marginBottom: 0,
            }}
          >
            {director.join(', ')}
            {' '}
          </p>
        </div>
        <div className="creator" style={{ display: 'flex' }}>
          <p
            className="creator-title"
            style={{
              color: 'rgb(58, 58, 58)  ', fontSize: '1.2rem', fontWeight: '500', marginBottom: 0,
            }}
          >
            Producer:&nbsp;
          </p>
          <p
            className="creator-name"
            style={{
              color: 'rgba(255,255,255,0.7)  ', textTransform: 'capitalize', fontSize: '1.1rem', marginBottom: 0,
            }}
          >
            {producer.join(', ')}
            {' '}
          </p>
        </div>
      </div>
      <p
        className="tv-presentation"
        style={{
          marginLeft: '10%', color: 'rgba(255,255,255,0.85)', width: '40%', fontFamily: 'serif', fontWeight: 550, fontSize: '1.05rem',
        }}
      >
        {overview}
      </p>
      <Button
        variant="contained"
        style={{
          backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '10%', fontWeight: '550', padding: '0.625% 2.5%',
        }}
      >
        {' '}
        <CheckIcon />
        &nbsp; Watchlist
        {' '}
      </Button>
      <div className="episodes" style={{ marginTop: ' 12.5% ', display: 'flex' }}>
        <Typography variant="h2" style={{ marginLeft: '10%', color: 'white' }}> Episodes</Typography>
        {EpisodeSelect(`${seasonName}(${episodeCount} episodes)`, [...new Array(episodeCount)].map((_, i) => `Episode ${i + 1}`))}
      </div>
    </div>
  );
};

export const MultiActionAreaCard = (props) => {
  const mode = useSelector((state) => state.theme.mode);
  const {
    imgPath, title, description, episodeNumber,
  } = props;
  const src = `${process.env.REACT_APP_BASE_URL_IMG}/${imgPath}`;
  return (
    <Card style={{
      width: '100%', color: (mode === 'browser' || mode === 'white') ? 'black' : 'white', backgroundColor: mode === 'browser' ? 'white' : mode, borderBottom: '1px solid rgb(77,77,77)',
    }}
    >
      <CardActionArea style={{ display: 'flex' }}>
        <CardContent style={{ width: '6%' }}>
          <Typography gutterBottom variant="h5" component="div">
            {episodeNumber}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={src}
          alt="green iguana"
          style={{ width: '18%' }}
        />
        <CardContent style={{ width: '76%' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MultiActionAreaCard.propTypes = {
  imgPath: PropTypes.instanceOf(String).isRequired,
  title: PropTypes.instanceOf(String).isRequired,
  description: PropTypes.instanceOf(String).isRequired,
  episodeNumber: PropTypes.instanceOf(Number).isRequired,
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
  seasonName: PropTypes.instanceOf(String).isRequired,
  episodeCount: PropTypes.instanceOf(Number).isRequired,
};

export default TvGinformation;
