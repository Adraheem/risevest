import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  }
});

export const setAuthToken = (token?: string) => {
  if (token) {
    apiInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiInstance.defaults.headers["Authorization"];
  }
}

export default apiInstance;
