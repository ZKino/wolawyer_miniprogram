// pages/member/member.js

import { getCardList } from "../../ajax/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardLists_jx: [],
    cardLists_qx: []
  },

  // 点击每一张卡片,跳转到对应的购买详情页
  toBuyDetail (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../buydetail/buydetail?id=${id}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // 页面加载 获取会员卡列表
    getCardList()
      .then((res) => {
        console.log(res)
        this.setData({
          cardLists_jx: res.data.datas.geren_list,
          cardLists_qx: res.data.datas.qiye_list
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