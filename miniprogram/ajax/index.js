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
      dataType: 'json',
      success: resolve,
      fail: reject,
    })
  })
}

/**
 * API
 */
const ApiUrl = "http://www.ruanjinqiao.com/mobile"

const GETHOMECASELISTS_URL = ApiUrl + "/index.php?act=vip_inactive&op=case_index_list"
const GETCASEDETAIL_URL = ApiUrl + "/index.php?act=vip_inactive&op=page_tmpl&type=case"
const GETCASELISTS = ApiUrl + "/index.php?act=vip_inactive&op=case_list"
const GETCASETYPE = ApiUrl + "/index.php?act=vip_inactive&op=get_group&type=case"
const GETLAWYERLISTS = ApiUrl + "/index.php?act=vip_inactive&op=search_lawer"
const GETAREA = ApiUrl + "/index.php?act=area&op=area_list"
const GETLAWYERDETAIL = ApiUrl + "/index.php?act=vip_inactive&op=lawer_detail&key=undefined"
const GETSLECTTYPE = ApiUrl + "/index.php?act=vip_inactive&op=type_select"

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

export {
  getHomeCaseLists,
  getCaseDetail,
  getCaseLists,
  getCaseType,
  getLawyerLists,
  getArea,
  getLawyerDetail,
  getSelectType
}
