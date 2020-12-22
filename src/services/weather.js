import request from './request'

import { BOOKING_SERVICES_TYPES } from '@/constants'

// const host = process.env.NODE_ENV === 'production' ? '111.230.53.166' : '111.230.53.166'
// const port = process.env.NODE_ENV === 'production' ? '7077' : '7077'
// const baseURL = `http://${host}:${port}/weather`

const baseURL = `/weather`

const config = {
  type: BOOKING_SERVICES_TYPES.WEATHER
}

export const dailyForecast = (location) => {
  return request.get(`${baseURL}/daily-forecast`, { location }, config)
}

export const dailyHistory = (location, start, end) => {
  return request.get(`${baseURL}/daily-history`, { location, start, end }, config)
}
