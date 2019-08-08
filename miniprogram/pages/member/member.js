// pages/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardLists_jx: [
      {
        id: 0,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911847154314443_240.png",
        name: "体验卡",
        price: "9.90"
      },
      {
        id: 1,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911847154314443_240.png",
        name: "体验卡",
        price: "9.90"
      },
      {
        id: 2,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911847154314443_240.png",
        name: "体验卡",
        price: "9.90"
      },
      {
        id: 3,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911847154314443_240.png",
        name: "体验卡",
        price: "9.90"
      },
      {
        id: 4,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911847154314443_240.png",
        name: "体验卡",
        price: "9.90"
      },
      {
        id: 5,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911847154314443_240.png",
        name: "体验卡",
        price: "9.90"
      }
    ],
    cardLists_qx: [
      {
        id: 0,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911858390322994_240.png",
        name: "体验卡",
        price: "99.00"
      },
      {
        id: 1,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911858390322994_240.png",
        name: "体验卡",
        price: "99.00"
      },
      {
        id: 2,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911858390322994_240.png",
        name: "体验卡",
        price: "99.00"
      },
      {
        id: 3,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911858390322994_240.png",
        name: "体验卡",
        price: "99.00"
      },
      {
        id: 4,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911858390322994_240.png",
        name: "体验卡",
        price: "99.00"
      },
      {
        id: 5,
        src: "http://www.ruanjinqiao.com/data/upload/rjq/card/05911858390322994_240.png",
        name: "体验卡",
        price: "99.00"
      }
    ]
  },

  // 点击每一张卡片,跳转到对应的购买详情页
  toBuyDetail (e) {
    
    let id = e.currentTarget.dataset.id
    // console.log(id)
    wx.navigateTo({
      url: `../buydetail/buydetail?id=${id}`,
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