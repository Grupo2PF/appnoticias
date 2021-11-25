import axios from 'axios';


export function getNotices(payload){
    return async function (dispatch) {
      const response = await axios.get(`https://climatechangelive1.herokuapp.com/news`);
      dispatch({
        type: "GET_NOTICES",
        payload: response.data,
      });
    };
  }
    
    