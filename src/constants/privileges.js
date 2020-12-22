export const ALLOCATION = 'allocation' // 1.分货管理
export const ALLOCATION_APPLY = 'begin_allocation' // 1.1.发起分货
export const ALLOCATION_APPLY_ADD = 'begin_allocation-add' // 新增
export const ALLOCATION_APPLY_IMPORT = 'begin_allocation-import' // 导入
export const ALLOCATION_APPLY_SAVE = 'begin_allocation-save' // 保存
export const ALLOCATION_APPLY_SUBMIT = 'begin_allocation-submit' // 提交
export const ALLOCATION_APPLY_DELETE = 'begin_allocation-delete' // 删除
export const ALLOCATION_APPLY_MODIFY = 'begin_allocation-edit' // 修改

export const ALLOCATION_CONFIRM = 'confirm_allocation' // 1.2.分货需求确认
export const ALLOCATION_CONFIRM_ADD = 'confirm_allocation-add' // 新增
export const ALLOCATION_CONFIRM_MORE = 'confirm_allocation-more' // 多次追加分货
export const ALLOCATION_CONFIRM_NO_ALLOCATION = 'confirm_allocation-no_allocation' // 不分货，开始自由订货
export const ALLOCATION_CONFIRM_CANCEL = 'confirm_allocation-allocation_cancel' // 取消分货
export const ALLOCATION_CONFIRM_START = 'confirm_allocation-begin_allocation' // 执行分货
export const ALLOCATION_CONFIRM_DELETE = 'confirm_allocation-delete' // 删除
export const ALLOCATION_CONFIRM_MODIFY = 'confirm_allocation-edit' // 修改
export const ALLOCATION_CONFIRM_SAVE = 'confirm_allocation-save' // 保存

export const ALLOCATION_CONFIRM_RULES = 'allocation_rules' // 1.2.1分货规则设置
export const ALLOCATION_CONFIRM_RULES_SAVE = 'allocation_rules-save' // 保存

export const ALLOCATION_SPE_ORDER_REVIEW = 'spe_order_check' // 1.3.外单审核
export const ALLOCATION_SPE_ORDER_REVIEW_RESET = 'spe_order_check-clean' // 重置
export const ALLOCATION_SPE_ORDER_REVIEW_REJECT = 'spe_order_check-deny' // 驳回
export const ALLOCATION_SPE_ORDER_REVIEW_ACCEPT = 'spe_order_check-pass' // 审核通过
export const ALLOCATION_SPE_ORDER_REVIEW_QUERY = 'spe_order_check-query' // 查询

export const ALLOCATION_REVIEW = 'allocation_adjust' // 1.4.分货结果调整
export const ALLOCATION_REVIEW_BATCH_MODIFY = 'allocation_adjust-Batch_adjustment' // 批量调整
export const ALLOCATION_REVIEW_COFIRM = 'allocation_adjust-confirm' // 确认
export const ALLOCATION_REVIEW_MODIFY = 'allocation_adjust-modify' // 修改

export const ALLOCATION_SUM = 'allocation_sum' // 加盟店不分完

export const ALLOCATION_ADJUST_NOFENWAN = 'allocation_adjust-noFenWan' // 加盟店不分完

export const ALLOCATION_QUERY = 'allocation_query' // 1.5.分货查询
export const ALLOCATION_QUERY_QUERY = 'allocation_query-query' // 查询

export const ALLOCATION_TARGET = 'target' // 区域销售目标设定
export const ALLOCATION_TARGET_ADD = 'target-add' // 新增
export const ALLOCATION_TARGET_DELETE = 'target-delete' // 删除
export const ALLOCATION_TARGET_EDIT = 'target-edit' // 编辑
export const ALLOCATION_TARGET_SAVE = 'target-save' // 保存
export const ALLOCATION_TARGET_SUBMIT = 'target-submit' // 提交

export const STORE_ORDER = 'store_order' // 2.门店订货
export const STORE_ORDER_SUBMIT_TO_ERP = 'store_order-submitToERP' // 提交到 ERP
export const ORDER_CTRL = 'storeOrder-order_ctrl' // 门店订货控制 是否订货开关
export const ORDER_CLOSE_CTRL = 'storeOrder-order_close_ctrl' // 门店订货控制 是否订货开关

export const WEEKPLAN = 'weekPlan' // 周计划管理

export const WEEKGOODS = 'weekGoods' // 发布周计划商品
export const WEEKGOODS_ADD = 'weekGoods-add' // 添加
export const WEEKGOODS_DELETE = 'weekGoods-delete' // 删除
export const WEEKGOODS_EDIT = 'weekGoods-edit' // 修改
export const WEEKGOODS_INFO = 'weekGoods-info' // 详情
export const WEEKGOODS_PUBLISH = 'weekGoods-publish' // 发布
export const WEEKGOODS_SAVE = 'weekGoods-save' // 保存
export const WEEKGOODS_SAVEANDPUBLISH = 'weekGoods-saveAndPublish' // 保存并发布

export const PQCHECKWEEKPLAN = 'pqCheckWeekPlan' // 片区审核周计划
export const PQCHECKWEEKPLAN_CHECKED = 'pqCheckWeekPlan-checked' // 审核
export const PQCHECKWEEKPLAN_COMPLETED = 'pqCheckWeekPlan-completed' // 完成
export const PQCHECKWEEKPLAN_EDIT = 'pqCheckWeekPlan-edit' // 修改
export const PQCHECKWEEKPLAN_SAVE = 'pqCheckWeekPlan-save' // 保存
export const PQCHECKWEEKPLAN_UNCHECKED = 'pqCheckWeekPlan-unchecked' // 取消审核
export const PQCHECKWEEKPLAN_UNCOMPLETED = 'pqCheckWeekPlan-uncompleted' // 取消完成
export const WEEKORDER_UNLIMITED = 'weekOrder-unlimited' // 不限制填写订货数量

export const AREACHECKWEEKPLAN = 'areaCheckWeekPlan' // 区域审核周计划
export const AREACHECKWEEKPLAN_ADJUST = 'areaCheckWeekPlan-adjust' // 批量调整
export const AREACHECKWEEKPLAN_EDIT = 'areaCheckWeekPlan-edit' // 修改
export const AREACHECKWEEKPLAN_EXPORT = 'areaCheckWeekPlan-export' // 导出
export const AREACHECKWEEKPLAN_LOCKED = 'areaCheckWeekPlan-locked' // 锁定
export const AREACHECKWEEKPLAN_SAVE = 'areaCheckWeekPlan-save' // 保存
export const AREACHECKWEEKPLAN_UNLOCKED = 'areaCheckWeekPlan-unlocked' // 取消锁定

export const DAILYSENDGOODS = 'dailySendGoods' // 周计划发货确认
export const DAILYSENDGOODS_BEGIN = 'dailySendGoods-begin' // 开始分货
export const DAILYSENDGOODS_EDIT = 'dailySendGoods-edit' // 修改
export const DAILYSENDGOODS_SAVE = 'dailySendGoods-save' // 保存

export const WEEKORDER = 'weekOrder' // 周计划订货
export const WEEKORDER_EDIT = 'weekOrder-edit' // 修改
export const WEEKORDER_SAVE = 'weekOrder-save' // 保存
export const WEEKPLAN_DASHBOARD = 'weekplan_dashboard' // 保存

export const GOODS = 'goods' // 商品管理
export const GOODS_STOCK_MANAGEMENT = 'stockManagement' // 商品可订库存管理
export const RULESOFGOODS = 'rulesOfGoods' // 商品必上管理
export const ORDER_DETAIL_TODAY = 'order_detail_today' // 门店订货明细（今日）
export const ORDER_RISK = 'order_risk' // 门店订货风险监控（今日）

export const ALLOCATION_TOTAL = 'allocation_total' // 区域货量
export const ALLOCATION_SEC_BEGIN = 'confirm_allocation-sec_begin' // 发起二次分货
export const GOODS_OUT_OF_STOCK = 'out-of-stock' // 发起二次分货

export const MANAGEMENT = 'management' // 管理模块
export const STOREORDER = 'storeOrder' // 门店订货控制
export const STOREUSERS = 'store_users' // 门店订货控制
export const STORECONF = 'conf' // 运维管理
export const STOREAREACONF = 'areaConf' // 区域设置
export const STORERELATION = 'storeRelation' // 区域设置
export const HISTORY_STORE = 'history_store' // 分货历史查询_门店
export const HISTORY_DIS = 'history_dis' // 分货历史查询_区域

export const ROUTE = {
  'allocation-apply': ALLOCATION,
  'allocation-confirm': ALLOCATION_CONFIRM,
  'allocation-spe-order-review': ALLOCATION_SPE_ORDER_REVIEW,
  'allocation-review': ALLOCATION_REVIEW,
  'allocation-query': ALLOCATION_QUERY,
  'allocation-regional-sales-target': ALLOCATION_TARGET,
  'booking-index': STORE_ORDER,
  'goods-inventory': GOODS_STOCK_MANAGEMENT,
  'booking-ctrl': STOREORDER,
  'plan-setting': WEEKPLAN,
  'piece-audit': PQCHECKWEEKPLAN,
  'area-audit': AREACHECKWEEKPLAN,
  'ship-confirm': DAILYSENDGOODS,
  'store-plan-order': WEEKORDER

}
