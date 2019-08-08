// pages/lawyerdetail/lawyerdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lawyerInfos: {
      id: 0,
      lawyerHeader: "../../images/timg.jpg",
      lawyerName: "律师的名字",
      lawyerGender: "男生",
      work_year: "7-9",
      add_time: "2019-07-15",
      lawer_mobile: "155****7666",
      area_info: "内蒙古 呼和浩特市 赛罕区",
      lawer_pass: "c20111501220135",
      work_register: "11501201310130985",
      types: ["人身损害", "财产侵权", "借贷纠纷", "公司事务", "合同纠纷"],
      lawer_descript: "公司法务，长年法律顾问，民间借贷，经济纠纷，侵权纠纷，劳动纠纷，合同纠纷，合同起草，刑事案件，行政案件，民事事各类法律案件",
      lawer_office: "福建福民律师事务所",
      super_department: "福州市司法局"
    }
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
    // console.log(options)
    // ajax请求当前这个律师的数据(带上参数lawyerId)
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