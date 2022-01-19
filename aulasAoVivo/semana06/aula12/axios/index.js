import axios from 'axios'

//import { promise } from '../promises/index.js'

const URL = 'https://jsonplaceholder.typicode.com/'

const getPost = async () => {
  try {
    const response = await axios.get(URL + 'posts/1')
    console.log(response.data)
  } catch (error) {
    console.log(error.message)
  }
}

getPost()
