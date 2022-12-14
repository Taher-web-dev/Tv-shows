import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setDarkMode, setThemeMode } from 'redux/theme.slice';
import TimebTyping from 'hooks/timeBetweenTyping';
import { changeKeyword } from 'redux/keyWord.slice';
import MaterialUISwitch, { SvgIconsColor } from './Header.styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#fff',
    },
    text: {
      primary: '#fff',
    },
  },
});

const Header = () => {
  const w = window.innerWidth;
  const dispatch = useDispatch();
  const { tolc, updateTlastchange } = TimebTyping();
  const switchMode = (e) => {
    const dark = e.target.checked;
    if (dark) {
      dispatch(setDarkMode('rgb(58,58,58)'));
    } else {
      dispatch(setThemeMode('white'));
    }
  };
  const makeSearch = (e) => {
    const currentTime = Date.now();
    if ((currentTime - tolc) > 500) {
      dispatch(changeKeyword(e.target.value));
    } else {
      updateTlastchange(currentTime);
    }
  };
  return (
    <div style={{
      backgroundColor: 'rgb(39, 39, 39)', display: 'flex', alignItems: 'center', padding: w < 726 ? '2.5% 0' : '0.625% 0',
    }}
    >
      <SvgIconsColor w={w} />
      <ThemeProvider theme={theme}>
        <TextField label="Search" color="secondary" style={{ marginLeft: w < 726 ? '0' : '20%', width: w < 726 ? '45%' : '25%', marginRight: w < 726 ? '5%' : '20%' }} onChange={makeSearch} focused />
      </ThemeProvider>
      <Button
        variant="contained"
        style={{
          backgroundColor: 'rgb(228,77,26)', color: 'white', justifySelf: 'flex-end', display: w < 726 ? 'none' : 'block',
        }}
      >
        WATCH LIST
      </Button>
      <MaterialUISwitch onChange={switchMode} />
      <Typography variant="h6" style={{ color: 'white' }}>Dark</Typography>
    </div>
  );
};

export default Header;
