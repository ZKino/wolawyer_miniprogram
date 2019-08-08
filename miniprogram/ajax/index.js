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
const GETHOMECASELISTS_URL = "http://www.ruanjinqiao.com/mobile/index.php?act=vip_inactive&op=case_index_list"
const GETCASEDETAIL_URL = "http://www.ruanjinqiao.com/mobile/index.php?act=vip_inactive&op=page_tmpl&type=case"
const GETCASELISTS = "http://www.ruanjinqiao.com/mobile/index.php?act=vip_inactive&op=case_list&type_id=0&order=case_id+desc&keyword=&curpage=1&page=10"
const GETCASETYPE = "http://www.ruanjinqiao.com/mobile/index.php?act=vip_inactive&op=get_group&type=case"

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
const getCaseLists = () => {
  return ajax({
    url: GETCASELISTS
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
