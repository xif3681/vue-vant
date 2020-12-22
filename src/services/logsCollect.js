import request from './request'
import { BOOKING_SERVICES_TYPES } from '@/constants'

const config = { type: BOOKING_SERVICES_TYPES.LOGCOLLECT }

// const host = 'http://test.dinghuo.pagoda.com.cn'
// const host = ' http://dinghuo.pagoda.com.cn'
// const baseURL = process.env.NODE_ENV === 'production' ? `${host}/logsCollect` : 'logsCollect'
const baseURL = 'logsCollect'

export const logsCollect = (param) => {
  return request.post(`${baseURL}/msg`, param, config)
}
