import axios from 'axios';


export const nowPlaying = async (API_URL) => {
  try {
    let response = await axios.get(API_URL);
    return response.data
  } catch (error) {
    console.log("err while calling api", error.message);
  }
};