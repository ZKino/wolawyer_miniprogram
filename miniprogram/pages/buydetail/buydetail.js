// pages/buydetail/buydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "" // 当前要购买的会员卡的id
  },

  // 点击"成为会员"按钮
  getUserInfo (e) {
    getApp().globalData.userInfo = e.detail.userInfo
    console.log(getApp().globalData.userInfo)
    // console.log(e)
    
    // 点击购买之前先让用户登陆注册
    // console.log(getApp().globalData.code)
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     console.log(res)
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           console.log(res)
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })


    // 获取当前要购买的会员卡的id
    // let id = this.data.id
    // wx.navigateTo({
    //   url: `../orderdetail/orderdetail?id=${id}`,
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取当前要购买的会员卡的id
    this.setData({
      id: options.id
    })
    
    // ajax请求(根据传入的id)
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