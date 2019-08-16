// pages/login/login.js

import { sendSms, check_sms_captcha } from "../../ajax/index.js"

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
    sendSms(this.data.phone)
      .then((res) => {
        if (!res.data.datas.error) {
          wx.showToast({
            title: '发送成功',
            duration: 3000
          })
        } else {
          wx.showToast({
            title: '发送失败',
            icon: 'none',
            duration: 3000
          })
        }
      })

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
      this.checkSmsCaptcha(this.data.phone, this.data.messageCode)
    }
  },

  // 后台校验 手机/验证码
  checkSmsCaptcha (phone, messageCode) {
    check_sms_captcha(phone, messageCode)
      .then((res) => {
        if (!res.data.datas.error) {
          // getApp().globalData.username = res.data.datas.username
          // getApp().globalData.userid = res.data.datas.userid
          // getApp().globalData.key = res.data.datas.key
          wx.setStorage({ key: 'username',data: res.data.datas.username })
          wx.setStorage({ key: 'userid', data: res.data.datas.userid })
          wx.setStorage({ key: 'key', data: res.data.datas.key })
          wx.showToast({
            title: '登陆成功',
            duration: 3000,
            success: function() {
              wx.switchTab({
                url: '../home/home',
              })
            }
          })
        } else {
          wx.showToast({
            title: res.data.datas.error,
            icon: 'none',
            duration: 3000
          })
        }
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
    clearInterval(this.timer)
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