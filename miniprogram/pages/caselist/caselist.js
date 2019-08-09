// pages/caselist/caselist.js

import { getCaseLists, getCaseType } from '../../ajax/index.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true, // 时间排序三角形的朝向
    caseLists: [],
    caseType: [], // 案件的类别数据
    caseTxt: "全部分类", // 案件类别默认显示文字

    order: "case_id desc", // 按时间降序排序 默认降序
    type_id: 0, // 案件类别排序 默认全部分类
    curpage: 1, // 当前页
    page: 10, // 每页的条数
    pageTotal: "", // 总页数
    hasmore: "" // 是否还有剩余页数
  },

  // 点击 时间排序 按钮 
  orderByTime () {
    let _order = this.data.order
    if (_order === "case_id desc") {
      this.setData({
        order: "case_id",
        flag: false
      })
    } else if (_order === "case_id") {
      this.setData({
        order: "case_id desc",
        flag: true
      })
    }
    // 这里要请求一次ajax
    this.render_getCaseLists(this.data.type_id, this.data.order, this.data.curpage, this.data.page)
  },

  // 点击 案件类别 按钮
  bindPickerChange: function (e) {
    let i = e.detail.value
    this.setData({
      caseTxt: this.data.caseType[i].group_name,
      type_id: i
    })
    // 这里要请求一次ajax
    this.render_getCaseLists(this.data.type_id, this.data.order, this.data.curpage, this.data.page)
  },

  // ajax请求 典型案例列表页 案件类别的数据
  render_getCaseType: function () {
    getCaseType()
      .then((res) => {
        let caseType = res.data.datas.list
        this.setData({
          caseType
        })
      })
  },

  // ajax请求 典型案例列表页 列表的数据
  render_getCaseLists: function (type_id, order, curpage, page) {
    getCaseLists(type_id, order, curpage, page)
      .then((res) => {
        let pageTotal = res.data.page_total
        let hasmore = res.data.hasmore
        let caseLists = res.data.datas.list.list
        this.setData({
          caseLists,
          pageTotal,
          hasmore
        })
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.render_getCaseType() 

    this.render_getCaseLists(this.data.type_id, this.data.order, this.data.curpage, this.data.page) 

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
    if (this.data.hasmore) {
      this.setData({
        curpage: this.data.curpage + 1
      })
      getCaseLists(this.data.type_id, this.data.order, this.data.curpage, this.data.page)
        .then((res) => {
          let hasmore = res.data.hasmore
          let oldData = this.data.caseLists
          let newData = res.data.datas.list.list
          let caseLists = [...oldData, ...newData]
          this.setData({
            caseLists,
            hasmore
          })
        })
    } else {
      wx.showToast({
        title: '没有更多了',
        icon: "loading"
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})