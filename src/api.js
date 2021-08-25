import axios from "axios";
import baseUrl from './baseUrl'

export const sendFormData = (path, data) =>  axios.post(`${baseUrl}${path}`, data)


