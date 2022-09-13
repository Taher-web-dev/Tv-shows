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
import DEFAULT_IMG from 'constants/urls';

const EpisodeSelect = (title, episodes, w) => {
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
        sx={{ width: w < 726 ? 150 : 300, '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, '.css-i4bv87-MuiSvgIcon-root': { color: 'white' } }}
        style={{ marginLeft: w < 726 ? 'auto' : '42.5%', marginRight: w < 726 ? 'auto' : '10%' }}
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
    w,
  } = props;
  return (
    <div style={{ backgroundImage: `url(${process.env.REACT_APP_BASE_URL_IMG}/${poster})` }}>
      <Typography variant="h2" style={{ marginLeft: w < 726 ? '5%' : '10%', color: 'white', fontSize: w < 726 ? '2rem' : '3.75rem' }}>
        {' '}
        {title}
      </Typography>
      <div className="tags" style={{ marginLeft: w < 726 ? '5%' : '10%', marginTop: w < 726 ? '5%' : 'auto' }}>
        {genres.map((genre) => (
          <Button key={genres.indexOf(genre)} variant="contained" style={{ backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '1%' }}>{genre}</Button>
        ))}
        <Button variant="contained" style={{ backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '1%' }}>{year}</Button>
        <Button variant="contained" style={{ backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: '1%' }}>{`${nbrSeasons} saisons`}</Button>
      </div>
      <div className="creators" style={{ marginLeft: w < 726 ? '5%' : '65%', marginRight: w < 726 ? 'auto' : '5%' }}>
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
          marginLeft: w < 726 ? '5%' : '10%', color: 'rgba(255,255,255,0.85)', width: w < 726 ? '90%' : '40%', fontFamily: 'serif', fontWeight: 550, fontSize: '1.05rem', textAlign: 'justify',
        }}
      >
        {overview}
      </p>
      <Button
        variant="contained"
        style={{
          backgroundColor: 'rgb(58,58,58)', textTransform: 'capitalize', marginLeft: w < 726 ? '5%' : '10%', fontWeight: '550', padding: '0.625% 2.5%',
        }}
      >
        {' '}
        <CheckIcon />
        &nbsp; Watchlist
        {' '}
      </Button>
      <div className="episodes" style={{ marginTop: ' 12.5% ', display: 'flex', paddingBottom: w < 726 ? '5%' : 0 }}>
        <Typography variant={w < 726 ? 'h4' : 'h2'} style={{ marginLeft: w < 726 ? '5%' : '10%', color: 'white' }}> Episodes</Typography>
        {EpisodeSelect(`${seasonName}(${episodeCount} episodes)`, [...new Array(episodeCount)].map((_, i) => `Episode ${i + 1}`), w)}
      </div>
    </div>
  );
};

export const MultiActionAreaCard = (props) => {
  const mode = useSelector((state) => state.theme.mode);
  const {
    imgPath, title, description, episodeNumber, w,
  } = props;
  const src = imgPath ? `${process.env.REACT_APP_BASE_URL_IMG}/${imgPath}` : DEFAULT_IMG;
  return (
    <Card style={{
      width: '100%', color: (mode === 'browser' || mode === 'white') ? 'black' : 'white', backgroundColor: mode === 'browser' ? 'white' : mode, borderBottom: '1px solid rgb(77,77,77)',
    }}
    >
      <CardActionArea style={{ display: w < 726 ? 'block' : 'flex' }}>
        <CardContent style={{ width: w < 726 ? '100%' : '6%', textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            {episodeNumber}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={src}
          alt="green iguana"
          style={{ width: w < 726 ? '100%' : '18%', maxHeight: '120px' }}
        />
        <CardContent style={{ width: w < 726 ? '100%' : '76%' }}>
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
  w: PropTypes.instanceOf(Number).isRequired,
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
  w: PropTypes.instanceOf(Number).isRequired,
};

export default TvGinformation;
