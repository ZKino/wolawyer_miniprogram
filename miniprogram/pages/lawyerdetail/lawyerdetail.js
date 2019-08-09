// pages/lawyerdetail/lawyerdetail.js

import { getLawyerDetail } from "../../ajax/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lawyerInfos: {}
  },

  /**
   * 点击律师头像,放大图片,调用previewImage组件
   */
  previewImage (e) {
    // 当前律师头像路径
    let src = e.currentTarget.dataset.src
    wx.previewImage({
      urls: [src],
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    // ajax请求当前这个律师的数据(带上参数lawyerId)
    getLawyerDetail(id)
      .then((res) => {
        let lawyerInfos = res.data.datas
        this.setData({
          lawyerInfos
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