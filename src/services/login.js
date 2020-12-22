import request from './request'

export const login = ({ code } = {}) => {
  return request.post('/gateway-service/gateway/login', { code })
}
