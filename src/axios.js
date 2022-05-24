import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: "https://us-central1-challenge-5c0c2.cloudfunctions.net/api", //firebase deploy endpoint
  // "http://localhost:5001/challenge-5c0c2/us-central1/api", //test endpoint
});

export default instance;
