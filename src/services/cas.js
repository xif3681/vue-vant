// CAS Doc http://wiki.pagoda.com.cn/pages/viewpage.action?pageId=5014189
//
// Login https://cas.pagoda.com.cn/cas2/login?service=http://127.0.0.1:8080
// Logout https://cas.pagoda.com.cn/cas2/logout?service=http://127.0.0.1:8080
// UserInfo https://cas.pagoda.com.cn/cas2/serviceValidate?ticket= *******&format=json&service=http://123.207.32.147:8008/index;
//

import request from './request'
import { BOOKING_SERVICES_TYPES } from '@/constants'
import { getbaseURL } from '@/constants/host';

// const baseURL = 'https://cas.pagoda.com.cn/cas2'
const baseURL = getbaseURL();
export const login = () => {
  window.location.href = `${baseURL}/login?service=${window.location.origin}`
}

export const serviceValidate = (ticket) => {
  return request.get(`${baseURL}/serviceValidate?ticket=${ticket}&format=json&service=${window.location.origin}`, {}, { type: BOOKING_SERVICES_TYPES.CAS })
}

export const logout = () => {
  window.location.href = `${baseURL}/logout?service=${window.location.origin}`
}
