import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MaterialUISwitch from './Header.styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setDarkMode, setThemeMode } from 'redux/theme.slice';
import TimebTyping from 'hooks/timeBetweenTyping';
import { changeKeyword } from 'redux/keyWord.slice';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#fff',
    },
    text: {
      primary: '#fff'
    }
  }
});

const Header = () => {
  const dispatch = useDispatch();
  const { tolc, updateTlastchange } = TimebTyping();
  const switchMode = (e) => {
    const dark = e.target.checked;
    dark ? dispatch(setDarkMode('black')) : dispatch(setThemeMode('white'));
  };
  const makeSearch = (e) => {
    const currentTime = Date.now();
    if ((currentTime - tolc) > 500) {
      console.log(e.target.value);
      dispatch(changeKeyword(e.target.value));
    } else {
      updateTlastchange(currentTime);
    }
  }
  return (
    <div style={{ backgroundColor: 'rgb(39, 39, 39)', display: 'flex', alignItems: 'center', padding: '0.625% 0' }} >
      <ThemeProvider theme={theme}>
        <TextField label="Search" color='secondary' style={{ marginLeft: '35%' }} onChange={makeSearch} focused />
      </ThemeProvider>
      <Button variant="contained" style={{ backgroundColor: 'rgb(228,77,26)', color: 'white', justifySelf: 'flex-end', marginLeft: '25%' }}>WATCH LIST</Button>
      <MaterialUISwitch onChange={switchMode} />
      <Typography variant='h6' style={{ color: 'white' }}>Dark</Typography>
    </div>
  )
}

export default Header