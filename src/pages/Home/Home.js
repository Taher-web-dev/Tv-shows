import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import manageHomeState from './helper';
import BasicCard from './Home.styles';
import { showapiError, shownoResults, callTosearch, shownoMessage } from 'redux/message.slice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state) => state.theme.mode);
  const showState = useSelector((state) => state.shows);
  const shows = showState.shows;
  const apiError = showState.error;
  const message = useSelector((state) => state.message.message);
  const keyWord = useSelector((state) => state.keyword.text);
  let tvShows = shows;
  tvShows = manageHomeState(shows, dispatch, showapiError, apiError, tvShows, keyWord, callTosearch, shownoResults, shownoMessage);
  return (
    <div style={{ backgroundColor: mode === 'browser' ? 'white' : mode, padding: '2.5% 0' }} >
      <Alert variant={mode === 'black' ? 'light' : 'dark'} style={{ textAlign: 'center', width: '60%', marginLeft: '20%', fontFamily: 'serif', fontWeight: '550', display: (keyWord.trim().length > 0 && tvShows.length > 0) ? 'none' : 'block' }}>
        {message}
      </Alert>
      <Grid container spacing={2} style={{ width: '85%', margin: '0 0 0 7.5%' }}>
        {(tvShows.length > 0) && (tvShows.map((show) => (
          <Grid item xs={3} key={show.id} onClick={() => navigate(`/show/`, { state: { id: show.id } })} style={{ cursor: 'pointer' }}>
            {BasicCard(show.backdrop_path, show.original_name)}
          </Grid>
        )))}
      </Grid>
    </div>
  )
}

export default Home