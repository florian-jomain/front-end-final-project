import axios from 'axios'

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
})

function errorHandler(error) {
  if (error.response.data) {
    throw error
  }
  throw error
}

export default {
  service,

  signupHelper(userInfo) {
    return service
      .post('/api/auth/signup/helper', userInfo)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  signupCharity(userInfo) {
    return service
      .post('/api/auth/signup/charity', userInfo)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  signin(userInfo) {
    return service
      .post('/api/auth/signin', userInfo)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  isLoggedIn() {
    return service
      .get('/api/auth/isLoggedIn')
      .then((res) => res.data)
      .catch(errorHandler)
  },

  logout() {
    return service
      .get('/api/auth/logout')
      .then((res) => res.data)
      .catch(errorHandler)
  },

  getProjects() {
    return service
      .get('/api/projects')
      .then((res) => res.data)
      .catch(errorHandler)
  },

  getHelpers() {
    return service
      .get('/api/helpers')
      .then((res) => res.data)
      .catch(errorHandler)
  },

  getOneProject(id) {
    return service
      .get(`/api/projects/${id}`)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  getOneHelper(id) {
    return service
      .get(`/api/user/${id}`)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  createProject(data) {
    return service
      .post(`/api/projects/create`, data)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  editProject(id, data) {
    return service
      .patch(`/api/projects/${id}`, data)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  createApplication(id, data) {
    return service
      .post(`/api/projects/${id}`, data)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  deleteProject(id) {
    return service
      .delete(`/api/projects/${id}`)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  createProfileHelper(userInfo) {
    return service
      .patch('/api/helpers/create/', userInfo)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  addProjectToHelper(id, userInfo) {
    return service
      .patch(`/api/helpers/addProjectToHelper/${id}`, userInfo)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  createProfileCharity(userInfo) {
    return service
      .patch('/api/charities/create/', userInfo)
      .then((res) => res.data)
      .catch(errorHandler)
  },
}
