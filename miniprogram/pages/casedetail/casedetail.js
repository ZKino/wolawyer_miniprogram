// pages/casedetail/casedetail.js

// 引入wxParse.js模块
var WxParse = require("../../utils/wxParse/wxParse.js")

import { getCaseDetail } from '../../ajax/index.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    caseData: {},
    noNetWork: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 获取 典型案例 详情页数据
    // 获取id
    let id = options.id
    // ajax请求,带上参数(options.caseId)
    getCaseDetail(id)
    .then((res) => {
      let caseData = res.data.datas
      this.setData({
        caseData
      })
      // 利用第三方插件wxParse解析后台传过来的字符串html
      WxParse.wxParse("content", "html", this.data.caseData.body, this, 0)
    })
    .catch((err) => {
      this.setData({
        noNetWork: "--暂无数据--"
      })
    })

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