import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'styles/globalStyles.css';
import { thunkShows } from 'redux/showTv.slice';
import RouterConfig from './routing/RouterConfig';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(thunkShows()), []);
  return (
    <RouterConfig />
  );
}

export default App;
