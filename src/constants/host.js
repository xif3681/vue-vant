/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-04-19 12:06:43
 * @LastEditors: 小白
 * @LastEditTime: 2020-07-29 18:37:49
 */
// current env
export const ENV = process.env.NODE_ENV || 'development'

// sso url
// test host : 'https://cas2.test.pagoda.com.cn/cas2/login?service='
export const getSSOHost = () => {
  return (
    ENV === 'production'
      ? 'https://cas.pagoda.com.cn/cas2/login?service='
      : 'https://cas.pagoda.com.cn/cas2/login?service='
  )
}
export const getbaseURL = () => {
  return (
    ENV === 'production'
      ? 'https://cas.pagoda.com.cn/cas2'
      : 'https://cas.pagoda.com.cn/cas2'
  )
}

// base url
export const apiURL = {

  development: 'http://booking.kd1.pagoda.com.cn',
  test: 'http://booking-test.kt1.pagoda.com.cn',
  production: 'http://dinghuo.pagoda.com.cn'
}
