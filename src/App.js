import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RouterConfig from "./routing/RouterConfig";
import { darkTheme, lightTheme } from "styles/theme";
import "styles/globalStyles.css";
import { thunkShows } from 'redux/showTv.slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(thunkShows()), []);
  return (
    <RouterConfig />
  );
}


export default App;
