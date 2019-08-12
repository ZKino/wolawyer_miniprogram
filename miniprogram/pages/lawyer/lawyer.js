// pages/lawyer/lawyer.js

import { getLawyerLists, getArea, getSelectType } from "../../ajax/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lawyerLists: [], // 律师列表数据
    noData: "", // 暂无数据

    area: [], // 区域数据
    originalArea: [], // 区域数据原始数据

    categoryTxt: "全部分类", // 全部分类文本
    categoryType: [], // 案件类别数据
    originalCategoryType: [], // 存储请求下来的案件类别数据

    page_total: "", // 总页数
    curpage: 1, // 当前页数,默认是第1页
    page: 10, // 每页有多少条数据,默认10条
    hasmore: true, // 是否还有更多页数
    type_id: 0, // 案件类别,模式是全部分类,就是是0
    area_id: 0 // 区域,默认是全国,也就是0
  },

  // 点击律师列表的某一条跳转到律师详情页面
  toDetail (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../lawyerdetail/lawyerdetail?id=${id}`,
    })
  },

  // 请求律师数据
  render_getLawyerLists: function (type_id, area_id, curpage, page) {
    getLawyerLists(type_id, area_id, curpage, page)
      .then((res) => {
        let lawyerLists = res.data.datas.list.list
        this.setData({
          lawyerLists
        })
      })
      .catch((err) => {
        this.setData({
          noData: "--暂无数据--"
        })
      })
  },

  // 请求 全部分类 的数据
  render_getSelectType: function (i) {
    getSelectType()
      .then((res) => {
        let levelOneList = res.data.datas.list
        let levelTwoList = res.data.datas.list[i].next
        let levelOneArr = levelOneList.map((item) => {
          return item.type_name
        })
        let levelTwoArr = levelTwoList.map((item) => {
          return item.type_name
        })
        this.setData({
          categoryType: [levelOneArr, levelTwoArr],
          originalCategoryType: levelOneList
        })
        
      })
  },
  
  bindCategoryTypePickerColumnChange(e) {
    let column = e.detail.column
    let value = e.detail.value
    if (column === 0) {
      this.render_getSelectType(value)
    }
  },

  bindCategoryTypePickerChange (e) {
    let index0 = e.detail.value[0]
    let index1 = e.detail.value[1] || 0
    let type_id = this.data.originalCategoryType[index0].next[index1].type_id
    let type_name = this.data.originalCategoryType[index0].next[index1].type_name
    this.setData({
      type_id: type_id,
      categoryTxt: type_name
    })
    this.render_getLawyerLists(this.data.type_id, this.data.area_id, this.data.curpage, this.data.page)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 页面加载请求区域数据
    // this.render_getArea(this.data.area_id)

    // 页面加载请求律师数据
    this.render_getLawyerLists(this.data.type_id, this.data.area_id, this.data.curpage, this.data.page)

    // 页面加载请求案件分类数据
    this.render_getSelectType(0)

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

    if (this.data.hasmore) {
      this.setData({
        curpage: this.data.curpage + 1
      })
      getLawyerLists(this.data.type_id, this.data.area_id, this.data.curpage, this.data.page)
        .then((res) => {
          let hasmore = res.data.hasmore
          let oldData = this.data.lawyerLists
          let newData = res.data.datas.list.list
          let lawyerLists = [...oldData, ...newData]
          this.setData({
            lawyerLists,
            hasmore
          })
        })
    } else {
      wx.showToast({
        title: '没有更多了',
        icon: "loading"
      })
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})