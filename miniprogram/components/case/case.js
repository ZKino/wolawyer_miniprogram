// components/case/case.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 父组件传过来的值
    case: {
      type: Object,
      value: {} // 默认值
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 点击典型案例 某一条 列表,跳转到 案例详情页
    toCaseDetail(e) {
      let id = e.currentTarget.dataset.id // 获取典型案例的id
      // navigateTo跳转到非tabar页面
      wx.navigateTo({
        url: `../../pages/casedetail/casedetail?id=${id}`,
      })
    }

  }
})
