import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-menufunctions.cloudfunctions.net/api"
});
