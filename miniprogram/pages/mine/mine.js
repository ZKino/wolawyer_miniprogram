// pages/mine/mine.js

import { getMemberInfo } from "../../ajax/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userHeader: "../../images/member_w.png", // 用户头像
    mineTxt: "登陆/注册", // 显示用户姓名，默认情况下是 登录/注册
    cardInfo: "非会员", //card的等级
    key: "",
    isClick: true
  },

  // 跳转到 登陆/注册 页面
  toJumpLogin () {
    wx.navigateTo({
      url: '../login/login',
    })
  },

  // 跳转到 招商加盟 页面
  toJumpToJoin () {
    wx.navigateTo({
      url: '../tojoin/tojoin',
    })
  },

  // 跳转到 关于我们 页面
  toJumpAbout () {
    wx.navigateTo({
      url: '../about/about',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let key = getApp().globalData.key
    console.log(key)
    console.log("-------------")
    if (key) {
      getMemberInfo(key).then((res) => {
        console.log(res)
        this.setData({
          userHeader: res.data.datas.member_info.avator,
          mineTxt: res.data.datas.member_info.member_truename,
          cardInfo: res.data.datas.member_info.member_type_name + "/" + res.data.datas.member_info.member_grade_name,
          isClick: false
        })
      })
    } else {
      this.setData({
        isClick: true
      })
    }

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