// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    messageCode: "",
    messageCodeText: "短信验证",
    messageCodeTime: 60, // 倒计时总时间
    isSendMessageCode: true, // 是否可以发送短信验证码
    isLogin: true // 是否可以点击登陆注册
  },

  // 输入手机号码
  handlerPhone (e) {
    this.setData({
      phone: e.detail.value
    })
    let phoneLenght = this.data.phone.length
    if (phoneLenght === 11) {
      this.setData({
        isSendMessageCode: false
      })
    }else{
      this.setData({
        isSendMessageCode: true
      })
    }  
  },

  // 输入验证码
  handlerMessageCode (e) {
    this.setData({
      messageCode: e.detail.value
    })
    let messageCodeLength = this.data.messageCode.length
    if (messageCodeLength === 6) {
      this.setData({
        isLogin: false
      })
    } else {
      this.setData({
        isLogin: true
      })
    } 
  },

  // 点击 短信验证 按钮
  handlerGetMessageCode () {
    // ajax请求短信接口
    this.setData({
      isSendMessageCode: true
    })
    let count = this.data.messageCodeTime
    let text = this.data.messageCodeText
    var timer = setInterval(() => {
      count--
      this.setData({
        messageCodeText: count + 'S'
      })
      if (count === 0) {
        clearInterval(timer)
        console.log(text)
        this.setData({
          isSendMessageCode: false,
          messageCodeText: text
        })
      }
    }, 1000)
  },

  // 点击 登陆/注册 按钮
  handlerLogin () {
    // 验证手机号码和短信验证码不为空
    if (this.data.phone === "" || this.data.messageCode === "") {
      wx.showToast({
        title: '手机或验证码不能为空',
        icon: 'none',
        duration: 3000
      })
    } else {
      // ajax请求
      console.log(this.data.phone)
      console.log(this.data.messageCode)
    }
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