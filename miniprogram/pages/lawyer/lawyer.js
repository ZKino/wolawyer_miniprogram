// pages/lawyer/lawyer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lawyerLists: [
      {
        id: 0,
        lawyerHeader: "../../images/timg.jpg",
        lawyerName: "律师1",
        lawyerJob: ["人身损害", "财产侵权", "消费权益", "经济纠纷", "工伤赔偿", "工伤赔偿"],
        lawyerAddress: "四川省 自贡市 威远县"
      },
      {
        id: 1,
        lawyerHeader: "../../images/timg.jpg",
        lawyerName: "律师2",
        lawyerJob: ["人身损害", "财产侵权", "消费权益", "经济纠纷", "工伤赔偿"],
        lawyerAddress: "四川省 自贡市 富顺县"
      }
    ]
  },
  
  // 点击律师列表的某一条跳转到律师详情页面
  toDetail (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../lawyerdetail/lawyerdetail?lawyerId=${id}`,
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
    console.log("下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉")
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})