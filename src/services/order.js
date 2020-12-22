import request from './request'
import { BOOKING_SERVICES_TYPES } from '@/constants'
// const host = process.env.NODE_ENV === 'production' ? '118.89.18.229' : '118.89.18.229'
// const port = process.env.NODE_ENV === 'production' ? '10008' : '10008'
// const baseURL = `http://${host}:${port}/order-service/api/v1`
// const baseURL = 'http://192.168.10.85:10008/order-service/api/v1'
// const baseURL = 'http://localhost:10008/order-service/api/v1'

const baseURL = '/order-service/api/v1'

const config = { type: BOOKING_SERVICES_TYPES.ORDER_CREATE } // 缺货登记接口
// 创建自选订单
export const createSelectedItem = ({ storeCode, itemCode, lastValue, originRuleId, reasonText }) => {
  const params = {
    lastValue
  }
  if (originRuleId) {
    params.originRuleId = originRuleId
  }
  if (reasonText) {
    params.reasonText = reasonText
  }
  return request.post(`${baseURL}/selected/${storeCode}/store/${itemCode}/created`, params, { ...config, create: 'Y' })
}
// 修改订单接口
export const updateSelectedOrder = (storeCode, updated) => {
  return request.put(`${baseURL}/selected/order/update/${storeCode}/order`, { updated }, { ...config, create: 'N' })
}

export const login = (role) => {
  return request.post(`${baseURL}/login`, { role })
}

export const download = () => {
  return request.get(`${baseURL}/download`, {}, { responseType: 'blob' })
}

export const upload = (distributeCode) => {
  return `${baseURL}/${distributeCode || 'szpszx'}/upload`
}

export const allocationOrder = (distributeCode) => {
  return request.get(`${baseURL}/${distributeCode || 'szpszx'}/allocationOrder`)
}

export const allocationOrderConfig = () => {
  return request.get(`${baseURL}/allocationOrder/config`)
}

export const createAllocationOrderItem = (distributeCode, updated) => {
  return request.post(`${baseURL}/allocationOrder/${distributeCode || 'szpszx'}/allocationDetail/created`, { updated })
}

export const updateAllocationOrderItem = (itemId, version, updated) => {
  return request.put(`${baseURL}/allocationOrder/${itemId}/${version}/update`, { updated })
}

export const deleteAllocationOrderItem = (itemId) => {
  return request.delete(`${baseURL}/allocationOrder/delete/${itemId}/allocationDetail`)
}

export const submitAllocationOrderItem = (itemId, version) => {
  return request.put(`${baseURL}/allocationOrder/submit/${itemId}/id/${version}/version`)
}

export const getFruitItem = (distributionCode, itemCode) => {
  return request.get(`${baseURL}/fruit/${distributionCode || 'szpszx'}/distribution/${itemCode}/fruitItem`)
}
export const getFruitItemAndStock = (distributionCode, itemCode) => {
  return request.get(`${baseURL}/fruit/${distributionCode || 'szpszx'}/distribution/${itemCode}/fruitItemAndStock`)
}

export const startAllocation = (distributionCode) => {
  return request.post(`${baseURL}/startAllocation/${distributionCode || 'szpszx'}`)
}

/* Confirm */
export const confirmAllocationOrder = (distributeCode) => {
  return request.get(`${baseURL}/${distributeCode}/confirm/allocationOrder`)
}

export const startSecondAllocation = (disCode) => {
  return request.get(`${baseURL}/${disCode}/startSecondAllocation`)
}

/* OrderFeedBack */
export const submitFeedback = (storeCode, fruits) => {
  return request.post(`${baseURL}/${storeCode}/submitFeedback`, { fruits })
}

export const pendingFeedback = (storeCode) => {
  return request.get(`${baseURL}/${storeCode}/pendingFeedback`)
}

export const orgList = () => {
  return request.get(`${baseURL}/org/list`)
}

/* SpeOrderReview */
export const externalPiece = (disCode) => {
  return request.get(`${baseURL}/external/${disCode}/selection`)
}

export const externalList = ({ distributionCode, fruitCode, piece, storeCode, externalStatus }) => {
  return request.post(`${baseURL}/external/list`, { distributionCode, fruitCode, piece, storeCode, externalStatus })
}

export const externalApproved = (externalId, externalStatus) => {
  return request.put(`${baseURL}/external/${externalId}/approved`, { externalStatus })
}

/* Review */
export const auditPieceAgg = (data) => {
  return request.post(`${baseURL}/audit/piece/agg`, { data })
}

export const auditPieceFruits = (pieceCode) => {
  return request.get(`${baseURL}/audit/${pieceCode}/piece/fruits`)
}

export const updateAuditStores = (updated, transfers, versions, receiveTransferIds, addGoods) => {
  return request.put(`${baseURL}/updated/audit/stores`, { updated, transfers, versions, receiveTransferIds, addGoods })
}

export const auditPieceFruitDetail = (pieceCode, fruitCode) => {
  return request.post(`${baseURL}/audit/${pieceCode}/piece/${fruitCode}/fruitCode/detail`, {})
}

export const auditAllocationOrder = (pieceCode) => {
  return request.get(`${baseURL}/${pieceCode}/auditAllocationOrder`)
}

export const queryBatchEdit = (pieceCode = [], fruitCode = []) => {
  return request.get(`${baseURL}/allocation/queryBatchEdit`, { pieceCode, fruitCode })
}

export const saveLastAudit = (fruits) => {
  return request.post(`${baseURL}/allocation/saveLastAudit`, { fruits })
}

export const confirmAudit = (orgCode, fruitCode) => {
  return request.put(`${baseURL}/audit/${orgCode}/${fruitCode}/confirm`)
}

/* RegionalSalesTarget */
export const listSalesTarget = ({ disCode, startDate, endDate }) => {
  return request.post(`${baseURL}/sales/list`, { disCode, startDate, endDate })
}

export const salesTargetDetails = (id) => {
  return request.get(`${baseURL}/sales/${id}/detail`)
}

export const salesTarget = ({ id = 'new', disCode, startTime, endTime, saleAvgPerWeek, fruits = [] }) => {
  return request.post(`${baseURL}/saleTarget/${id}`, { disCode, startTime, endTime, saleAvgPerWeek, fruits })
}

export const submitSalesTarget = (id) => {
  return request.get(`${baseURL}/saleTarget/${id}/submit`)
}

export const deleteSalesTarget = (id) => {
  return request.get(`${baseURL}/saleTarget/${id}/delete`)
}
/* PurchaseOrder */
export const selectedValidation = (storeCode) => {
  return request.get(`${baseURL}/selected/order/${storeCode}/validation`)
}

export const selectedOrderList = (storeCode) => {
  return request.get(`${baseURL}/selected/order/${storeCode}/list`)
}

export const deleteSelectedItem = (itemId) => {
  return request.delete(`${baseURL}/selected/${itemId}/order/delete`)
}

export const selectedFruitInfo = (storeCode, itemCode) => {
  return request.get(`${baseURL}/selected/${storeCode}/org/${itemCode}/fruit/info`)
}

export const getAllOrder = (storeCode) => {
  return request.get(`${baseURL}/all/order/${storeCode}/list`)
}

// 修改自选订单备注
export const reasonUpdate = ({ storeCode, id, reasonText }) => {
  return request.post(`${baseURL}/selected/order/reason/${storeCode}/update`, { id, reasonText })
}

// 大区周计划查询
export const queryWeekOrgOrder = ({ disCode }) => {
  return request.get(`${baseURL}/week/${disCode}/queryWeekOrgOrder`)
}

/* Query */
export const queryDistribution = ({ disCode, dateRange, itemCode, status, sort }) => {
  const params = {
    disCode,
    dateRange
  }

  if (itemCode) {
    params.itemCode = itemCode
  }

  if (status) {
    params.status = status
  }

  if (sort) {
    params.sort = sort
  }

  return request.post(`${baseURL}/allocation/dis`, params)
}

export const queryStore = ({ disCode, dateRange, itemCode, pieceCode, storeCode }) => {
  const params = {
    disCode,
    dateRange
  }

  if (itemCode) {
    params.itemCode = itemCode
  }

  if (pieceCode) {
    params.pieceCode = pieceCode
  }

  if (storeCode) {
    params.storeCode = storeCode
  }

  return request.post(`${baseURL}/report/allocation/store`, params)
}

export const queryPiece = ({ disCode, dateRange, itemCode, pieceCode }) => {
  const params = {
    disCode,
    dateRange
  }

  if (itemCode) {
    params.itemCode = itemCode
  }

  if (pieceCode) {
    params.pieceCode = pieceCode
  }

  return request.post(`${baseURL}/report/piece`, params)
}

export const queryExportExcel = ({
  type,
  disCode,
  dateRange,
  itemCode,
  status,
  pieceCode,
  storeCode
}) => {
  const params = {
    disCode,
    dateRange
  }

  if (itemCode) {
    params.itemCode = itemCode
  }

  if (status) {
    params.status = status
  }

  if (pieceCode) {
    params.pieceCode = pieceCode
  }

  if (storeCode) {
    params.storeCode = storeCode
  }

  return request.post(`${baseURL}/${type}/download/allocation`, params)
}

export const queryDownloadExcel = (filename) => {
  return request.get(`${baseURL}/allocation-history/${filename}`, {}, { responseType: 'blob' })
}

export const queryExternalOrder = ({
  disCode,
  dateRange,
  itemCode,
  pieceCode,
  storeCode,
  externalStatus
}) => {
  const params = {
    disCode,
    dateRange
  }

  if (itemCode) {
    params.itemCode = itemCode
  }

  if (status) {
    params.status = status
  }

  if (pieceCode) {
    params.pieceCode = pieceCode
  }

  if (storeCode) {
    params.storeCode = storeCode
  }

  if (externalStatus) {
    params.externalStatus = externalStatus
  }

  return request.post(`${baseURL}/report/queryExternalOrder`, params)
}

/* Goods Inventory */
export const inventoryQuery = ({ disCode, fruitCode, status, fruitType }) => {
  const params = {
    disCode
  }
  if (fruitCode) {
    params.fruitCode = fruitCode
  }
  if (status) {
    params.status = status
  }
  if (fruitType) {
    params.fruitType = fruitType
  }

  return request.post(`${baseURL}/inventory/query`, params)
}

export const inventoryUpload = (distributionCode) => {
  return `${baseURL}/inventory/${distributionCode}/upload`
}

export const inventoryDownload = () => {
  return request.get(`${baseURL}/download/inventory/template`, {}, { responseType: 'blob' })
}

export const inventorySync = (distributionCode) => {
  return request.get(`${baseURL}/inventory/${distributionCode}/sync`)
}

/* Config */
export const disConfig = (disCode) => {
  return request.get(`${baseURL}/allocationOrder/disConfig`, { disCode })
}

/* management */

export const enumManagement = () => {
  return request.get(`${baseURL}/query/stores/management/enum`)
}
/* 重新提交订单 */
export const resubmit = ({ disCode, storeCodes, cutOfftime }) => {
  return request.post(`${baseURL}/query/stores/management/resubmit`, { disCode, storeCodes, cutOfftime })
}
/* 提单时间列表 */
export const submitCutOffTimes = (disCode) => {
  return request.post(`${baseURL}/query/stores/management/${disCode}/cutOffTimes`)
}

export const storeManagement = ({ disCode, pieceCode, storeCode, isOpened, jieOrder, isBooking, pushStatus, pushOrderTime, isAllocated, isPreSale }) => {
  const params = {
    disCode
  }
  if (pieceCode !== '') {
    params.pieceCode = pieceCode
  }
  if (storeCode !== '') {
    params.storeCode = storeCode
  }
  if (isOpened !== '') {
    params.isOpened = isOpened
  }

  if (jieOrder !== '') {
    params.jieOrder = jieOrder
  }
  if (isBooking !== '') {
    params.isBooking = isBooking
  }
  if (isAllocated !== '') {
    params.isAllocated = isAllocated
  }
  if (isPreSale !== '') {
    params.isPreSale = isPreSale
  }
  if (pushStatus !== '') {
    params.pushStatus = pushStatus
  }
  if (pushOrderTime !== '') {
    params.pushOrderTime = pushOrderTime
  }

  return request.post(`${baseURL}/query/stores/management`, params)
}

export const bookingControl = () => {
  return request.get(`${baseURL}/booking-control`)
}
/* 追加分货 */
export const startAppendAllocation = (disCode) => {
  return request.post(`${baseURL}/startAppendAllocation/${disCode}`)
}
/* 片区加减货 */
export const changeQty = (params) => {
  return request.post(`${baseURL}/allocationOrder/transfer/changeQty`, params)
}
/* 分货统计列表 */
export const statisList = (params) => {
  return request.post(`${baseURL}/allocationOrder/statis/list`, params)
}
/* 分货统计果品信息 */
export const statisFruits = (disCode) => {
  return request.get(`${baseURL}/allocationOrder/statis/fruits/${disCode}`)
}
/* 转让记录列表（共享分货结果审核的页面） */
export const transferList = (data) => {
  return request.post(`${baseURL}/allocationOrder/transfer/list`, { data })
}
/* 片区转让拒绝 &&  片区取消转让 */
export const transferRefuse = (id, type, versions) => {
  return request.post(`${baseURL}/allocationOrder/transfer/refuse`, { id, type, versions })
}
/* 片区转让确认（与分货详情修改中的提交参数一致，路由地址变更） */
export const transferConfirm = () => {
  return request.post(`${baseURL}/allocationOrder/transfer/confirm`)
}
/* 查询配送中心下的片区信息 */
export const pieceListByDisCode = ({ disCode, isBooking }) => {
  return request.post(`${baseURL}/pieceListByDisCode`, { disCode, isBooking })
}
/* 必上规则列表查询 */
export const goodsManageQuery = ({ disCode, ruleType, mustStatus, storeType, pageSize, pageNum }) => {
  const params = {
    disCode,
    pageSize,
    pageNum
  }
  if (ruleType.length > 0) {
    params.ruleType = ruleType
  }
  if (mustStatus !== '') {
    params.mustStatus = [ parseInt(mustStatus) ]
  }
  if (storeType.length > 0) {
    params.storeType = storeType
  }

  return request.post(`${baseURL}/goodsManage/query`, params)
}
/* 删除规则  */
export const goodsManageDelete = ({ disCode, id }) => {
  return request.delete(`${baseURL}/goodsManage/${disCode}/${id}/delete`)
}
/* 必上规则状态切换 */
export const goodsManageStatus = ({ id, status }) => {
  return request.post(`${baseURL}/goodsManage/${id}/${status}`)
}
/* 新增规则 */
export const goodsManageInsert = (params) => {
  return request.post(`${baseURL}/goodsManage/insert`, params)
}
/* 新增规则 */
export const goodsManageUpdate = (params) => {
  return request.post(`${baseURL}/goodsManage/update`, params)
}
/* 单条规则根据id查询明细 */
export const goodsManageQueryDetil = (id) => {
  return request.get(`${baseURL}/goodsManage/${id}/query`)
}
/* 订单分析列表 */
export const analysisList = (storeCode) => {
  return request.post(`${baseURL}/selected/order/analysis/${storeCode}/list`)
}
/* 切换必上单品列表查询 */
export const mustFruitList = (storeCode, itemId) => {
  return request.post(`${baseURL}/selected/order/mustFruit/${storeCode}/${itemId}/list`)
}
/* 必上商品列表查询（数据源变更） */
export const mustFruitsList = (storeCode) => {
  return request.post(`${baseURL}/order/${storeCode}/mustFruits/list`)
}
/* 可订商品 新增果品 */
export const inventoryInsert = (disCode, fruitCode) => {
  return request.post(`${baseURL}/inventory/${disCode}/${fruitCode}/insert`)
}
/* 可订商品 新增入库/出库 */
export const inventoryStock = ({ disCode, bkId, stock, rType, time }) => {
  const params = {
    disCode, bkId, stock, rType
  }
  if (time) {
    params.validTime = time
  }
  return request.post(`${baseURL}/inventory/stock/insert`, params)
}
/* 区域汇总列表查询 */
export const allocationSummary = (disCode, fruitCode) => {
  const params = {
    disCode
  }
  if (fruitCode) {
    params.fruitCode = fruitCode
  }

  return request.post(`${baseURL}/audit/allocationSummary`, params)
}
/* 查询片区果品当前已审核件数 */
export const queryPieceConfirmed = (pieceCode, fruitCode) => {
  return request.get(`${baseURL}/queryPieceConfirmed/${pieceCode}/${fruitCode}`)
}
/* 自主申请加货 */
export const changeQtyBySelf = (params) => {
  return request.post(`${baseURL}/allocationOrder/transfer/changeQtyBySelf`, params)
}

/* 自主申请加货 */
export const getPiecesByDisCode = (disCode) => {
  return request.get(`${baseURL}/getPiecesByDisCode/${disCode}`)
}
/* 缺货数据列表查询 */
export const outOfStockData = ({ disCode, fruitCode, generateType }) => {
  const params = {
    disCode
  }
  if (fruitCode.length > 0) {
    params.fruitCode = fruitCode
  }
  if (generateType.length > 0) {
    params.generateType = generateType
  }
  return request.post(`${baseURL}/inventory/outOfStockData`, params)
}

/* 2、 缺货数据列表数据导出excel */
export const exportOutOfStockData = ({ disCode, fruitCode, generateType }) => {
  const params = {
    disCode
  }
  if (fruitCode.length > 0) {
    params.fruitCode = fruitCode
  }
  if (generateType.length > 0) {
    params.generateType = generateType
  }
  return request.post(`${baseURL}/inventory/download/exportOutOfStockData`, params, { responseType: 'blob' })
}
/* 4、 指定分货导入下载模板 */
export const assignOrgDownload = (disCode, category) => {
  return request.get(`${baseURL}/allocationOrder/${disCode}/assignOrg/download/${category}`, {}, { responseType: 'blob' })
}
/* 3 、 指定分货导入 */
export const assignOrgUpload = (distributionCode, category) => {
  return `${baseURL}/allocationOrder/${distributionCode}/assignOrg/upload/${category}`
}
/* 5、 指定分货片区列表查询 */
export const assignOrgList = (id) => {
  return request.get(`${baseURL}/allocationOrder/${id}/assignOrg/list`)
}
/*  6、 指定分货片区的件数修改 */
export const assignOrgUpdate = (params) => {
  return request.put(`${baseURL}/allocationOrder/assignOrg/update`, params)
}
/*  、 门店订货量 */
export const getFruitsLastValue = (storeCode) => {
  return request.get(`${baseURL}/all/order/${storeCode}/getFruitsLastValue`)
}
/*  、 获取门店销量预测果品信息 */
export const analysisSales = (storeCode) => {
  return request.get(`${baseURL}/selected/order/analysis/sales/${storeCode}/list`)
}

/*  、 门店预售商品列表查询 */
export const preSaleOrderList = (storeCode) => {
  return request.get(`${baseURL}/selected/preSaleOrder/${storeCode}/list`)
}

// 是否订货
export const storeManagementisBooking = (params) => {
  return request.post(`${baseURL}/update/stores/management`, params)
}

// 开关是否参与分货状态
export const storeManagementisAllocated = (params) => {
  return request.put(`${baseURL}/update/stores/isAllocated`, params)
}

// 开关是否追加预售状态
export const storeManagementisPreSale = (params) => {
  return request.put(`${baseURL}/update/stores/isPreSale`, params)
}

/*  周计划 */
// 新增区域周计划
export const createWeekOrg = ({ disCode, disName, startTime, endTime }) => {
  return request.post(`${baseURL}/week/createWeekOrg`, { disCode, disName, startTime, endTime })
}
// 删除区域周计划
export const delWeekOrgOrderPlan = ({ id }) => {
  return request.delete(`${baseURL}/week/${id}/delWeekOrgOrderPlan`)
}
// 区域周计划发布
export const publishWeekOrgOrderPlan = ({ id }) => {
  return request.put(`${baseURL}/week/${id}/publishWeekOrgOrderPlan`)
}
// 查询区域单个周计划商品详情
export const selectOneWeekOrgFruitDetail = ({ id }) => {
  return request.get(`${baseURL}/week/${id}/selectOneWeekOrgFruitDetail`)
}

// 查询单个果品
export const querySingleFruitDetail = ({ disCode, fruitCode, startTime, endTime }) => {
  return request.post(`${baseURL}/week/${disCode}/${fruitCode}/querySingleFruitDetail`, { startTime, endTime })
}

// 周计划新增商品
export const createWeekOrgOrder = ({ id, weekOrgOrder }) => {
  return request.post(`${baseURL}/week/${id}/createWeekOrgOrder`, weekOrgOrder)
}

// 修改区域周计划商品详情
export const updateWeekOrgFruitDetail = ({ id, weekOrgOrder }) => {
  return request.put(`${baseURL}/week/${id}/updateWeekOrgFruitDetail`, weekOrgOrder)
}

// 删除周计划商品
export const delWeekOrgFruit = ({ id }) => {
  return request.delete(`${baseURL}/week/${id}/delWeekOrgFruit`)
}
// 撤销周计划商品
export const cancelWeekOrgFruit = ({ id }) => {
  return request.put(`${baseURL}/week/${id}/cancelWeekOrgFruit`)
}
// 查询区域周计划数据
export const queryWeekStoreOrder = ({ disCode, startTime, endTime, fruitCode }) => {
  return request.post(`${baseURL}/week/${disCode}/queryWeekStoreOrder`, { startTime, endTime, fruitCode })
}
// 门店查询周计划 --废除接口
export const queryWeekOrg2Store = ({ disCode, storeCode }) => {
  return request.get(`${baseURL}/week/${disCode}/${storeCode}/queryWeekOrg2Store`)
}
// 门店查询周计划-按周查询
export const queryWeekStorePlan = ({ disCode, storeCode, week }) => {
  return request.get(`${baseURL}/week/${disCode}/${storeCode}/queryWeekStorePlan?week=${week}`)
}
// 门店查询周计划-历史
export const queryWeekOrg2StoreHistory = ({ disCode, storeCode }) => {
  return request.get(`${baseURL}/week/${disCode}/${storeCode}/queryWeekOrg2StoreHistory`)
}
// 片区查询周计划-历史
export const queryThisWeekPieceOrderTotalDetail = ({ pieceCode }) => {
  return request.get(`${baseURL}/week/product/${pieceCode}/queryThisWeekPieceOrderTotalDetail`)
}
// 区域查询周计划-历史
export const queryThisWeekOrgOrderDetail = ({ disCode }) => {
  return request.get(`${baseURL}/week/org/${disCode}/queryThisWeekOrgOrderDetail`)
}
// 修改门店周计划
export const createWeekOrg2Store = (weekOrgOrder) => {
  return request.post(`${baseURL}/week/createWeekOrg2Store`, weekOrgOrder)
}
// 提交门店周计划订单审核
export const submitWeekStoreOrder = ({ storeCode, week }) => {
  return request.put(`${baseURL}/week/${storeCode}/submitWeekStoreOrder?week=${week}`)
}
// 取消门店周计划提交订货
export const cancelWeekStoreOrder = ({ storeCode, week }) => {
  return request.put(`${baseURL}/week/${storeCode}/cancelWeekStoreOrder?week=${week}`)
}
// 门店恢复系统默认初始值
export const backWeekStoreOrderDetail = ({ disCode, storeCode, id, fruitCode }) => {
  return request.get(`${baseURL}/week/${disCode}/${storeCode}/${id}/${fruitCode}/backWeekStoreOrderDetail`)
}
// 查询片区门店周计划
export const queryWeekPieceOrderDetail = ({ pieceCode, storeCode, itemCode, week }) => {
  return request.post(`${baseURL}/week/product/${pieceCode}/queryWeekPieceOrderDetail`, { storeCode, itemCode, week })
}
// 片区审核门店多个果品
export const auditWeekPieceStore = ({ storeCode, week }) => {
  return request.put(`${baseURL}/week/product/${storeCode}/auditWeekPieceStore?week=${week}`)
}
// 片区取消审核
export const cancelWeekPieceStore = ({ storeCode, week }) => {
  return request.put(`${baseURL}/week/product/${storeCode}/cancelWeekPieceStore?week=${week}`)
}
// 完成片区审核
export const completeAuditWeekPieceStore = ({ storeCodes, week }) => {
  return request.post(`${baseURL}/week/product/completeAuditWeekPieceStore?week=${week}`, { storeCodes })
}
// 取消完成片区审核
export const cancelCompleteAuditWeekPieceStore = ({ storeCodes, week }) => {
  return request.post(`${baseURL}/week/product/cancelCompleteAuditWeekPieceStore?week=${week}`, { storeCodes })
}
// 片区更改门店商品周计划详情
export const updateWeekStoreOrder = (weekOrgOrder) => {
  return request.post(`${baseURL}/week/product/updateWeekStoreOrder`, weekOrgOrder)
}
// 片区恢复系统默认初始值
export const backWeekPieceStoreOrderDetail = ({ pieceCode, storeCode, id, fruitCode }) => {
  return request.get(`${baseURL}/week/product/${pieceCode}/${storeCode}/${id}/${fruitCode}/backWeekPieceStoreOrderDetail`)
}
// 片区查询周计划-按商品汇总
export const queryWeekPieceOrderTotalDetail = ({ pieceCode, week }) => {
  return request.get(`${baseURL}/week/product/${pieceCode}/queryWeekPieceOrderTotalDetail?week=${week}`)
}
// 区域查询周计划-按商品汇总
export const queryWeekOrgOrderDetail = ({ orgCode, week, fruitCode, pieceCode }) => {
  return request.post(`${baseURL}/week/org/${orgCode}/queryWeekOrgOrderDetail`, { week, fruitCode, pieceCode })
}
// 区域查询周计划-按门店明细
export const queryWeekOrgStoreDetail = ({ orgCode, page, storeCode, fruitCode, piece, week }) => {
  return request.post(`${baseURL}/week/org/${orgCode}/queryWeekOrgStoreDetail`, { page, storeCode, fruitCode, piece, week })
}
// 区域更改门店商品周计划详情
export const updateWeekOrgStoreOrder = (weekOrgOrder) => {
  return request.post(`${baseURL}/week/product/updateWeekOrgStoreOrder`, weekOrgOrder)
}
// 区域恢复系统默认初始值
export const backWeekOrgStoreOrderDetail = ({ disCode, storeCode, id, fruitCode }) => {
  return request.get(`${baseURL}/week/product/${disCode}/${storeCode}/${id}/${fruitCode}/backWeekOrgStoreOrderDetail`)
}
// 区域头部信息
export const queryWeekOrgTotals = ({ disCode, week }) => {
  return request.get(`${baseURL}/week/org/${disCode}/queryWeekOrgTotals?week=${week}`)
}
// 片区头部信息
export const queryWeekPieceTotals = ({ piece, week }) => {
  return request.get(`${baseURL}/week/product/${piece}/queryWeekPieceTotals?week=${week}`)
}
// 区域锁定
export const lockWeekOrg = ({ orgCode, week }) => {
  return request.put(`${baseURL}/week/store/${orgCode}/lockWeekOrg?week=${week}`)
}
// 区域取消锁定
export const cancelLockWeekOrg = ({ orgCode, week }) => {
  return request.put(`${baseURL}/week/store/${orgCode}/cancelLockWeekOrg?week=${week}`)
}
// 门店周计划状态查询
export const storeStatusDetail = ({ orgCode, status, page, piece, week }) => {
  const params = { ...page, week }
  if (piece) {
    params.piece = piece
  }
  return request.post(`${baseURL}/week/store/${orgCode}/${status}/storeStatusDetail`, params)
}
// 导出门店明细表
export const exportWeekOrgStoreDetail = ({ orgCode, page, storeCode, fruitCode, piece, week }) => {
  return request.post(`${baseURL}/week/org/${orgCode}/download/exportWeekOrgStoreDetail`, { page, storeCode, fruitCode, piece, week }, { responseType: 'blob' })
}
// 导出区域商品汇总表
export const exportWeekOrgOrderDetail = ({ orgCode, week }) => {
  return request.get(`${baseURL}/week/org/${orgCode}/download/exportWeekOrgOrderDetail?week=${week}`, {}, { responseType: 'blob' })
}
// 区域异常提交清单支持导出为excel
export const storeStatusDetailDownload = ({ orgCode, status, week }) => {
  return request.post(`${baseURL}/week/store/${orgCode}/${status}/storeStatusDetail/download`, { week }, { responseType: 'blob' })
}
// 周计划发货查询
export const queryWeekDispatch = ({ orgCode }) => {
  return request.get(`${baseURL}/week/dispatch/${orgCode}/queryWeekDispatch`)
}
// 计算发货
export const startComputeShip = ({ orgCode }) => {
  return request.get(`${baseURL}/week/dispatch/${orgCode}/startComputeShip`)
}
// 保存发货件数
export const updateDispatches = ({ orgCode, body }) => {
  return request.post(`${baseURL}/week/dispatch/${orgCode}/updateDispatches`, body)
}
// 查询预订单反馈
export const queryPendingFeedback = (storeCode) => {
  return request.get(`${baseURL}/week/dispatch/${storeCode}/queryPendingFeedback`)
}
// 查询预订单反馈
export const submitFeedbackWeek = (storeCode, fruits) => {
  return request.post(`${baseURL}/week/dispatch/${storeCode}/submitFeedback`, { fruits })
}
export const submitSelectedOrder = (storeCode) => {
  return request.get(`${baseURL}/selected/${storeCode}/submit`)
}
// “开放修改”的明细查询
export const weekFruitsEditLocks = (weekOrgId) => {
  return request.get(`${baseURL}/week-fruits-edit-locks/${weekOrgId}`)
}
// “开放修改”的明细更新
export const weekFruitsEditLocksEdit = (params) => {
  return request.put(`${baseURL}/week-fruits-edit-locks/edit`, params)
}
// 查询本周修改汇总接口--废除接口
export const planMetricEditCurrent = ({ disCode, storeCode }) => {
  return request.post(`${baseURL}/query/plan-metric-edits/current`, { disCode, storeCode })
}
// 查询下周修改汇总接口--废除接口
export const planMetricEditNextWeek = ({ disCode, storeCode }) => {
  return request.post(`${baseURL}/query/plan-metric-edits/nextWeek`, { disCode, storeCode })
}
// 查询下周修改汇总接口 -- 按周查询
export const planMetricEditTotals = ({ disCode, storeCode, week }) => {
  return request.post(`${baseURL}/query/plan-metric-edits/totals`, { disCode, storeCode, week })
}
// 查询门店修改审核列表
export const planMetricEditAll = ({ disCode, piece, week, storeCode, fruitCode, pieceStatus, orgStatus, usingDate }) => {
  const params = {
    disCode,
    piece,
    week
  }
  if (storeCode) {
    params.storeCode = storeCode
  }
  if (fruitCode) {
    params.fruitCode = fruitCode
  }
  if (pieceStatus !== '') {
    params.pieceStatus = [Number(pieceStatus)]
  }
  if (orgStatus !== '') {
    params.orgStatus = [Number(orgStatus)]
  }
  if (usingDate) {
    params.usingDate = usingDate
  }
  return request.post(`${baseURL}/query/plan-metric-edits/all`, params)
}
// 片区全部审核通过
export const pieceEditRecordsAuditSuccess = ({ ids }) => {
  return request.put(`${baseURL}/week/plan-piece-edit-records-audit-success`, { ids })
}
// 查询修改记录详情明细
export const pieceDetailsByplanId = (planId) => {
  return request.get(`${baseURL}/query/plan-detail/by/planId/${planId}`)
}
// 查询修改记录详情明细
export const pieceDetailsByplanEditId = (planEditId) => {
  return request.get(`${baseURL}/query/plan-detail/by/planEditId/${planEditId}`)
}

// 区域修改记录汇总审核通过/拒绝
export const editSummaryAudit = ({ disCode, fruitCode, usingDate, success, week }) => {
  return request.post(`${baseURL}/week/dis/editSummary/audit`, { disCode, fruitCode, usingDate, success, week })
}
// 区域修改锁定计划
export const editSummaryLockFruit = ({ disCode, fruitCode, usingDate, success }) => {
  return request.post(`${baseURL}/week/dis/editSummary/lockFruit`, { disCode, fruitCode, usingDate, success })
}
// 区域计划修改审核查询
export const planEditSummary = ({ disCode, fruitCode, usingDate, week }) => {
  const params = {
    disCode,
    week
  }
  if (fruitCode) {
    params.fruitCode = fruitCode
  }
  if (usingDate) {
    params.usingDate = usingDate
  }
  return request.post(`${baseURL}/query/plan-edits/summary`, params)
}

// 区域审核通过:
export const auditPlanOrg = ({ orgCode, week }) => {
  return request.put(`${baseURL}/week/store/${orgCode}/audit-plan?week=${week}`)
}
// 周计划商品备注:
export const weekOrgRemarkDetailRemark = ({ id, remark }) => {
  return request.post(`${baseURL}/update/week-org-detail/remark/${id}`, { remark })
}
// 保存变更的果品API
export const allocatingFruit = (orgCode, params) => {
  return request.post(`${baseURL}/change/week/allocating/${orgCode}/fruit`, params)
}
// 配送中心数据列表
export const manageDisCodeList = () => {
  return request.get(`${baseURL}/org/manage/list`)
}
// 配送中心数据列表
export const manageDisCodeUpdate = (disCode, params) => {
  return request.put(`${baseURL}/org/manage/${disCode}/update`, params)
}
// 4、 门店区域/片区信息维护列表
export const basicInfoManageQuery = (params) => {
  return request.post(`${baseURL}/stores/basicInfoManage/query`, params)
}
// 4、 门店区域/片区信息修改
export const basicInfoManageUpdate = (params) => {
  return request.put(`${baseURL}/stores/basicInfoManage/update`, params)
}
// 4、 从erp同步提单时间
export const refreshCutOffTime = (disCode) => {
  return request.post(`${baseURL}/stores/management/${disCode}/refreshCutOffTime`)
}
// 4、 周计划
export const listWeeks = (disCode) => {
  return request.get(`${baseURL}/week/${disCode}/listWeeks`)
}
// v1.4.4
// 分货异常门店预警
export const abnormalWarnList = ({ disCode, pieceCode, fruitCode, abnormalWarnType, curPage, pageSize }) => {
  return request.post(`${baseURL}/allocationOrder/store/abnormalWarn/list`, { disCode, pieceCode, fruitCode, abnormalWarnType, curPage, pageSize })
}
// 门店周计划异常预警
export const planAbnormalWarnList = ({ disCode, pieceCode, fruitCode, week, minProposalValue, maxProposalValue, curPage, pageSize }) => {
  return request.post(`${baseURL}/week/planAbnormalWarn/list`, { disCode, pieceCode, fruitCode, week, minProposalValue, maxProposalValue, curPage, pageSize })
}
// 门店周计划异常预警导出
export const planAbnormalWarnExport = ({ disCode, pieceCode, fruitCode, week, minProposalValue, maxProposalValue, curPage, pageSize }) => {
  return request.post(`${baseURL}/week/planAbnormalWarn/export`, { disCode, pieceCode, fruitCode, week, minProposalValue, maxProposalValue, curPage, pageSize }, { responseType: 'blob' })
}
// 预包装建议
export const prepackagingList = ({ storeCode }) => {
  return request.get(`${baseURL}/stores/prepackaging/${storeCode}/list`)
}
// 周计划达成监控和预警查询
export const completionWarningQuery = ({ disCode, pieceCode, storeCode, fruitCode, week }) => {
  return request.post(`${baseURL}/completion-and-warning/query`, { disCode, pieceCode, storeCode, fruitCode, week })
}
// 果品下拉框接口
export const weekPublishedFruits = ({ disCode, week }) => {
  return request.get(`${baseURL}/week/published/${disCode}/${week}/fruits`)
}
// 启动开始订货
export const startOrderGoods = (disCode) => {
  return request.post(`${baseURL}/all/order/${disCode}/startOrderGoods`)
}
// 启动开始订货
export const preAddGoodsDetail = ({ disCode, fruitCode, pieceCode }) => {
  return request.post(`${baseURL}/allocationOrder/transfer/preAddGoods/detail`, { disCode, fruitCode, pieceCode })
}
// 区域生效规则果品查询
export const mustFruitQsuery = (storeCode) => {
  return request.get(`${baseURL}/goodsManage/mustFruits/${storeCode}/query`)
}
// 门店缺货登记（新增接口）
export const outOfStockInsert = ({ storeCode, fruitCode, requireNum, lastValue }) => {
  return request.post(`${baseURL}/selected/order/${storeCode}/outOfStock/insert`, { fruitCode, requireNum, lastValue })
}
// 门店缺货登记（新增接口）
export const outOfStockList = (storeCode) => {
  return request.get(`${baseURL}/selected/order/${storeCode}/outOfStock/remind/list`)
}
// 订单回退
export const rollback = (disCode) => {
  return request.post(`${baseURL}/all/order/${disCode}/rollback`)
}
// 订单回退
export const appendAllocatedStatusClear = (disCode) => {
  return request.post(`${baseURL}/allocationOrder/${disCode}/appendAllocatedStatus/clear`)
}
