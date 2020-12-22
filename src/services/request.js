import axios from 'axios'
import { Dialog } from 'vant'
import { ENV, apiURL } from '../constants/host'

const instance = axios.create({
  baseURL: apiURL[ENV],
  timeout: 20000
})

instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  res => {
    if (res.data.errcode === 0) {
      return Promise.resolve(res.data)
    }
    if (res.data.status !== 200) {
      if (res.data.status === 406) {
        console.log('res', res);
        Dialog({ message: res.data.msg, confirmButtonText: '我知道了' })
        return Promise.resolve(res.data)
      } else if (res.data.token) {
        return Promise.resolve(res.data)
      } else if (res.status === 200 || res.data.status === 405) {
        return Promise.resolve(res.data)
      } else {
        console.log('res', res)
        Dialog({ message: '啊，服务器开小差了', confirmButtonText: '我知道了' })
        return Promise.reject(res)
      }
    } else {
      return Promise.resolve(res.data)
    }
  },
  error => {
    console.log('err' + error)
    Dialog({ message: '当前网络不佳', confirmButtonText: '我知道了' })
    return Promise.reject(error)
  }
)
export const baseURL = apiURL[ENV]
export default instance
