import axios from "axios";

const baseUrl = `http://localhost:3001/persons`

const create = (personObject) => {
  const req = axios.post(baseUrl, personObject)
  return req.then(response => response.data)
}

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(response => {
    console.log(response.data)
    return response.data
  })
}

export default {
  getAll: getAll,
  create: create,
}