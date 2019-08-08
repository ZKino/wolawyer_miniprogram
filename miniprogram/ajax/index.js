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

export {
  getHomeCaseLists,
  getCaseDetail,
  getCaseLists,
  getCaseType
}
