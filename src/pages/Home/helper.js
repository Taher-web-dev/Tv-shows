const filterTvShows = (initial, keywords) => (
  initial.filter((item) => item.name.includes(keywords))
);

const manageHomeState = (
  shows,
  dispatch,
  showapiError,
  apiError,
  tvShows,
  keyWord,
  callTosearch,
  shownoResults,
  shownoMessage,
) => {
  let tv = tvShows;
  if (apiError) {
    dispatch(showapiError(apiError));
    tv = [];
  } else if (keyWord.trim().length === 0) {
    dispatch(callTosearch());
  } else {
    tv = filterTvShows(shows, keyWord);
    if (tv.length === 0) {
      dispatch(shownoResults(keyWord));
    } else {
      dispatch(shownoMessage());
    }
  }
  return tv;
};

export default manageHomeState;
