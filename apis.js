import axios from "axios";

// Create an axios Object with pre-configured setting
const backendApi = axios.create({
  baseURL: "http://localhost:2107",
  // send cookies to the backend on every request

  withCredentials: true
});

function errorHandler(err) {
  if (err.response && err.response.data) {
    // console.log() error info for debugging
    console.log("API Error", err.response.data);
  } else {
    console.log("React Code Error", err);
  }

  // Alert a generic messsage for the user
  alert("Sorry! Something went wrong. Try again later");

  // Cause the error again so the .then() won't be called

  throw err;
}

export function getData() {
  return backendApi.get("/api/").catch(errorHandler);
}
export function getNewPost() {
  return backendApi.get("/api/data").catch(errorHandler);
}
