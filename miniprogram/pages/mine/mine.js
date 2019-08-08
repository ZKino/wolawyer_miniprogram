// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userHeader: "../../images/member_w.png" // 用户头像
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