import fetch from 'isomorphic-fetch';

export const actionTypes = {
    FETCH_DATA: 'FETCH_DATA',
    RESET: 'RESET'
}

export let fetchTvShow = (payload) => {
    return (dispatch) => {
        fetch('http://api.tvmaze.com/search/shows?q=' + payload)
          .then((res) => {
            return res.json()
          }, (err) => {
            console.error("ERROR");
            console.error(err);
          })
          .then((body) => {
            dispatch(loadFetchedData(body));
          });
      };
    
}

export let loadFetchedData = (body) => {
    return {
      type: actionTypes.FETCH_DATA,
      body: body
    };
  };

export const resetData = () => {
  return { type: actionTypes.RESET }
}