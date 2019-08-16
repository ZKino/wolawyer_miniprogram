/**
 * 封装wx.request
 */
const ajax = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.data || {},
      header: {},
      method: options.method || 'GET',
      dataType: options.dataType || 'json',
      success: resolve,
      fail: reject,
    })
  })
}

/**
 * API
 */
const ApiUrl = "https://www.ruanjinqiao.com"

const GETHOMECASELISTS_URL = ApiUrl + "/index.php?act=vip_inactive&op=case_index_list"
const GETCASEDETAIL_URL = ApiUrl + "/index.php?act=vip_inactive&op=page_tmpl&type=case"
const GETCASELISTS = ApiUrl + "/index.php?act=vip_inactive&op=case_list"
const GETCASETYPE = ApiUrl + "/index.php?act=vip_inactive&op=get_group&type=case"
const GETLAWYERLISTS = ApiUrl + "/index.php?act=vip_inactive&op=search_lawer"
const GETAREA = ApiUrl + "/index.php?act=area&op=area_list"
// const GETAREA = ApiUrl + "/index.php?act=area&op=area_list_all"
const GETLAWYERDETAIL = ApiUrl + "/index.php?act=vip_inactive&op=lawer_detail&key=undefined"
const GETSLECTTYPE = ApiUrl + "/index.php?act=vip_inactive&op=type_select"
const GETCARDlIST = ApiUrl + "/index.php?act=vip_inactive&op=card_list"
const GETCARDIMAGE = ApiUrl + "/index.php?act=vip_inactive&op=card_body"
const GETCARD = ApiUrl + "/index.php?act=vip_inactive&op=card_price"
const SENDSMS = ApiUrl + "/index.php?act=login&op=get_sms_captcha"
const CHECKSMSCAPTCHA = ApiUrl + "/index.php?act=login&op=sms_login"
const ORDERDETAIL = ApiUrl + "/index.php?act=vip_active&op=buy_step1"
const MEMBERINFO = ApiUrl + "/index.php?act=member_index"

// 首页 典型案例 的4条案例网络请求
const getHomeCaseLists = () => {
  return ajax({
    url: GETHOMECASELISTS_URL
  })
}

// 典型案例详情页的网络请求
const getCaseDetail = (id) => {
  return ajax({
    url: `${GETCASEDETAIL_URL}&id=${id}`
  })
}

//典型案例列表页 请求案例列表的网络请求
const getCaseLists = (type_id, order, curpage, page) => {
  return ajax({
    url: `${GETCASELISTS}&type_id=${type_id}&order=${order}&keyword=&curpage=${curpage}&page=${page}`
  })
}

// 典型案例列表页 请求案例分类的网络请求
const getCaseType = () => {
  return ajax({
    url: GETCASETYPE
  })
}

// 律师列表页面 请求律师列表数据的网络请求
const getLawyerLists = (type_id, area_id, curpage, page) => {
  return ajax({
    url: `${GETLAWYERLISTS}&type_id=${type_id}&area_id=${area_id}&order=&curpage=${curpage}&page=${page}`
  })
}

// 律师列表页面 全国区域 数据的网络请求
const getArea = (area_id) => {
  return ajax({
    url: `${GETAREA}&area_id=${area_id}&deep=1`
    // url: GETAREA
  })
}

// 律师列表页面 分类 的数据网络请求
const getSelectType = () => {
  return ajax({
    url: GETSLECTTYPE
  })
}

// 律师详情页面 数据的网络请求
const getLawyerDetail = (id) => {
  return ajax({
    url: `${GETLAWYERDETAIL}&lawer_id=${id}`
  })
}

// 会员卡列表页 数据的网络请求
const getCardList = () => {
  return ajax({
    url: GETCARDlIST
  })
}

// 会员卡详情页面的图片
const getCardImage = (id) => {
  return ajax({
    url: `${GETCARDIMAGE}&card_id=${id}`,
    dataType: "text/html"
  })
}

// 会员卡详情页面的数据
const getCard = (id) => {
  return ajax({
    url: `${GETCARD}&card_id=${id}`
  })
}

// 登陆页面 发送短信 验证码
const sendSms = (phone) => {
  return ajax({
    url: SENDSMS,
    data: {
      phone:phone
    }
  })
}

// 登陆页面 验证码/手机号 校验
const check_sms_captcha = (phone, messageCode) => {
  return ajax({
    url: CHECKSMSCAPTCHA,
    data: {
      phone: phone,
      mobilecode: messageCode
    }
  })
}

// 确认订单 页面的 会员卡/价格等数据
const getOrderDetail = () => {
  return ajax({
    url: ORDERDETAIL
  })
}

// 我的 页面 获取用户信息的网络请求
const getMemberInfo = (key) => {
  return ajax({
    url: `${MEMBERINFO}&key=${key}`
  })
}

export {
  getHomeCaseLists,
  getCaseDetail,
  getCaseLists,
  getCaseType,
  getLawyerLists,
  getArea,
  getLawyerDetail,
  getSelectType,
  getCardList,
  getCardImage,
  getCard,
  sendSms,
  check_sms_captcha,
  getOrderDetail,
  getMemberInfo
}
