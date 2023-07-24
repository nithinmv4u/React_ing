import axios from 'axios'
import { baseurl } from './constants/constants'

const instance = axios.create({
    baseURL: baseurl,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;