import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signupHelper(userInfo) {
    return service
      .post("/api/auth/signup/helper", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signupCharity(userInfo) {
    return service
      .post("/api/auth/signup/charity", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getProjects() {
    return service
      .get("/api/projects")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneProject(id) {
    return service
      .get(`/api/projects/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createProject(data) {
    return service
      .post(`/api/projects/`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editProject(id, data) {
    return service
      .patch(`/api/projects/${id}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteProject(id) {
    return service
      .delete(`/api/items/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createProfileHelper(userInfo) {
    return service
      .patch("/api/helpers/create/5ec12e1620d3b338667089c2", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createProfileCharity(userInfo) {
    return service
      .patch("/api/charities/create/5ec13a818bc8923bf61fbdf3", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};