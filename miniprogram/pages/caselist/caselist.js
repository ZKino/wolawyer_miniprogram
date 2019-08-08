// pages/caselist/caselist.js

import { getCaseLists, getCaseType } from '../../ajax/index.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag2: true, // 时间排序三角形的朝向
    caseLists: [],
    caseType: [], // 案件的类别数据
    caseTxt: "全部分类", // 案件类别默认显示文字

    order: "case_id desc", // 按时间降序排序 默认降序
    type_id: 0, // 案件类别排序 默认全部分类
    curpage: 1, // 当前页
    page: 10 // 每页的条数
  },

  // 点击 时间排序 按钮 
  orderByTime () {
    let _order = this.data.order
    if (_order === "case_id desc") {
      this.setData({
        order: "case_id",
        flag2: false
      })
    } else if (_order === "case_id") {
      this.setData({
        order: "case_id desc",
        flag2: true
      })
    }
    console.log(this.data.order)
    console.log(this.data.direction)
    // 这里要请求一次ajax
  },

  // 点击 案件类别 按钮
  bindPickerChange: function (e) {
    let i = e.detail.value
    this.setData({
      caseTxt: this.data.caseType[i].group_name,
      type_id: i
    })
    console.log(this.data.caseTxt)
    console.log(this.data.type_id)
    // 这里要请求一次ajax
  },

  // ajax请求 典型案例列表页 案件类别的数据
  render_getCaseType: function () {
    getCaseType().then((res) => {
      let caseType = res.data.datas.list
      this.setData({
        caseType
      })
    })
  },

  // ajax请求 典型案例列表页 列表的数据
  render_getCaseLists: function () {
    let curpage = this.data.curpage
    let page = this.data.page
    let type_id = this.data.type_id
    let order = this.data.order
    getCaseLists(type_id, order, curpage, page)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      // console.log(err)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.render_getCaseType()

    this.render_getCaseLists()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})