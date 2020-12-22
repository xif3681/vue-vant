import request from './request'

import { BOOKING_SERVICES_TYPES } from '@/constants'

const baseURL = `/erp/intelligentOrdering`

const config = { type: BOOKING_SERVICES_TYPES.ERP }

export const fruitsInfo = ({ orgCode, isFruits, isOrderItem, itemCodeList, sourceStatusList, itemTypeCode, isGift }) => {
  return request.post(`${baseURL}/fruitsInfo`, { orgCode, isFruits, isOrderItem, itemCodeList, sourceStatusList, itemTypeCode, isGift }, config)
}

export const itemStoreStock = (dataList) => {
  return request.post(`${baseURL}/itemStoreStock`, dataList, config)
}

export const orgCustItem = ({ orgCode, customerCode, itemCodeList }) => {
  return request.post(`${baseURL}/orgCustItem`, { orgCode, customerCode, itemCodeList }, config)
}

export const custMaxPriceQuery = ({ customerCode, itemCodeList }) => {
  return request.post(`${baseURL}/custMaxPriceQuery`, { customerCode, itemCodeList }, config)
}

export const customerOrderCtl = (customerCode) => {
  return request.post(`${baseURL}/customerOrderCtl`, { customerCode }, config)
}
// 试吃/
export const queryTryEatGoodsInfo = ({ dualOrgCodeList, mainGoodsCodeList }) => {
  return request.post(`${baseURL}/queryTryEatGoodsInfo`, { dualOrgCodeList: dualOrgCodeList, mainGoodsCodeList }, config)
}
