import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getStats() {
    return apiClient.get('/stats')
  },
  getLatest() {
    return apiClient.get('/comment/latest')
  },
  getKeys() {
    return apiClient.get('/getKeys')
  },
  filter(data) {
    return apiClient.get('/comment/adminFilter', { params: data })
  },
  deleteComment(uuid) {
    return apiClient.delete('/comment/' + uuid)
  },
  blockEmail(uuid) {
    return apiClient.post('/comment/' + uuid + '/block')
  },
}
