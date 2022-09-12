const filterTvShows = (initial, keywords) => (
    initial.filter((item) => item.name.includes(keywords))
);

const manageHomeState = (shows, dispatch, showapiError, apiError, tvShows, keyWord, callTosearch, shownoResults, shownoMessage) => {
    if (apiError) {
        dispatch(showapiError(apiError));
        tvShows = [];
    } else {
        if (keyWord.trim().length === 0) {
            dispatch(callTosearch());
        } else {
            tvShows = filterTvShows(shows, keyWord);
            if (tvShows.length === 0) {
                dispatch(shownoResults(keyWord));
            } else {
                dispatch(shownoMessage());
            }
        }
    }
    return tvShows;
};

export default manageHomeState;