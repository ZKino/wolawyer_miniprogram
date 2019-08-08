// pages/home/home.js

import { getHomeCaseLists } from '../../ajax/index.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // swiper 的数据
    imgUrls: [
      {
        id: 0,
        picSrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        id: 1,
        picSrc: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640'
      },
      {
        id: 2,
        picSrc: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      }
    ],
    indicatorDots: true, // 是否显示面板指示点
    indicatorColor: "#cccccc", // 指示点颜色
    indicatorActiveColor: "#1985ff", // 激活指示点的颜色
    autoplay: true, // 是否自动切换
    interval: 5000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
    circular: true, // 是否采用衔接滑动

    // 服务领域 数据
    iconDatas: [
      {
        id: 0,
        iconUrl: "../../images/baoxian.png",
        iconName: "保险纠纷"
      },
      {
        id: 1,
        iconUrl: "../../images/hetong.png",
        iconName: "合同纠纷"
      },
      {
        id: 2,
        iconUrl: "../../images/hunyin.png",
        iconName: "婚姻家庭"
      },
      {
        id: 3,
        iconUrl: "../../images/jiaotong.png",
        iconName: "交通事故"
      },
      {
        id: 4,
        iconUrl: "../../images/zhishi.png",
        iconName: "知识产权"
      },
      {
        id: 5,
        iconUrl: "../../images/gongsi.png",
        iconName: "公司法务"
      },
      {
        id: 6,
        iconUrl: "../../images/laogong.png",
        iconName: "劳动工伤"
      },
      {
        id: 7,
        iconUrl: "../../images/yiliao.png",
        iconName: "医疗纠纷"
      }
    ],

    // 开通会员广告的 数据
    adTips: "您尚未开通会员",

    // 典型案例 数据
    caseDatas: [],
    noNetWork: "",

    // 合作伙伴 数据
    partnersDatas: [
      {
        id: 0,
        partnersUrl: "../../images/logo1.jpg"
      },
      {
        id: 1,
        partnersUrl: "../../images/logo2.jpg"
      },
      {
        id: 2,
        partnersUrl: "../../images/logo3.jpg"
      },
      {
        id: 3,
        partnersUrl: "../../images/logo4.jpg"
      },
      {
        id: 4,
        partnersUrl: "../../images/logo5.jpg"
      },
      {
        id: 5,
        partnersUrl: "../../images/logo6.jpg"
      }
    ],

  },  

  // 开通立省 按钮跳转
  toJumpMember() {
    // switchTab跳转到tabar页面
    wx.switchTab({
      url: '../../pages/member/member',
    })
  },

  // 点击典型案例的更多按钮,跳转到典型案例列表页
  toCaseList () {
    wx.navigateTo({
      url: '../caselist/caselist',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 首页 典型案例 的4条案例网络请求
    getHomeCaseLists()
    .then((res) => {
      let caseDatas = res.data.datas.list
      this.setData({
        caseDatas
      })
    })
    .catch((err) => {
      this.setData({
        noNetWork: "--暂无数据--"
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