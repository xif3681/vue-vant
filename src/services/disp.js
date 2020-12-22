import request from './request'

import { BOOKING_SERVICES_TYPES } from '@/constants'

// const host = process.env.NODE_ENV === 'production' ? '118.89.18.229' : '118.89.18.229'
// const port = process.env.NODE_ENV === 'production' ? '8096' : '8096'
// const baseURL = `http://${host}:${port}/disp/api/v1`
const baseURL = `/disp/api/v1`

const config = {
  type: BOOKING_SERVICES_TYPES.DISP
}

// no used
export const getToken = () => {
  return request.get(`${baseURL}/pub/getToken`, {}, config)
}
// no used
export const listByStoreHour = ({ orgType, orgCode, startDate, endDate, pageNum = 1, pageSize = 10 }) => {
  return request.get(`${baseURL}/store/sale/listByStoreHour`, { orgType, orgCode, startDate, endDate, pageNum, pageSize }, config)
}

// no used
export const storeLevel = (orgType, orgCode) => {
  return request.get(`${baseURL}/dim/storeLevel/list`, { orgType, orgCode }, config)
}

// 节假日
export const festival = (startDate, endDate) => {
  return request.get(`${baseURL}/dim/festival/list`, { startDate, endDate }, config)
}

export const listByItem = ({ orgType, orgCode, itemCode, startDate, endDate, pageNum = 1, pageSize = 10 }) => {
  return request.get(`${baseURL}/store/sale/listByItem`, { orgType, orgCode, itemCode, startDate, endDate, pageNum, pageSize }, config)
}
export const avgByItem = ({ orgType, orgCode, itemCode, endDate, startDate }) => {
  return request.get(`${baseURL}/store/sale/avgByItem`, { orgType, orgCode, itemCode, endDate, startDate }, config)
}

// 果品分类
export const itemLevelList = (categoryType, categoryCode) => {
  return request.get(`${baseURL}/dim/itemLevel/list`, { categoryType, categoryCode }, config)
}
// 销售额 (经营日历)
export const listByStore = ({ orgType, orgCode, startDate, endDate, pageNum = 1, pageSize = 10 }) => {
  return request.get(`${baseURL}/store/sale/listByStore`, { orgType, orgCode, startDate, endDate, pageNum, pageSize }, config)
}

// 7日营销活动(经营日历)
export const activityList = ({ storeCode, startDate, endDate }) => {
  return request.get(`${baseURL}/store/activity/list`, { storeCode, startDate, endDate }, config)
}

// 商品分类--第三类
export const getItemList = (categoryType, categoryCode) => {
  return request.get(`${baseURL}/dim/itemLevel/getItemList`, { categoryType, categoryCode }, config)
}
// 商品资讯信息
export const getStoreItemList = ({ orgType, orgCode, startDate, endDate }) => {
  return request.get(`${baseURL}/store/sale/getStoreItemList`, { orgType, orgCode, startDate, endDate }, config)
}
// 【总经理驾驶室】获取指定组织机构的商品销售数据【实时】
export const findOrgItemSaleInfos = ({
  isWeekAlign = 1,
  queryType = 0,
  calendar = 1,
  dataType = 3,
  brandTypes = [
    1
  ],
  sortField = 0,
  sortOrder = 0,
  pageSize = 100,
  orgType = 3,
  orgCodes,
  categoryType = 4,
  categoryCode,
  toType = '11',
  endTime,
  startTime

}) => {
  return request.post(`${baseURL}/storestatsrt/item/sale/findOrgItemSaleInfos`, {
    isWeekAlign,
    queryType,
    calendar,
    dataType,
    brandTypes,
    sortField,
    sortOrder,
    pageSize,
    orgType,
    orgCodes,
    limitCategorys: [
      { categoryType,
        categoryCodes: [categoryCode] }],
    // categoryType,
    // categoryCode,
    toType,
    endTime,
    startTime }, config)
}
