// components/tabs/Tabs.js 文件名最好和文件夹名一致
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: [
      {name: "首页",},
      {name: "原创",},
      {name: "分类",},
      {name: "关于",},
    ],
    cindex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e) {
      let i = e.currentTarget.dataset.operation
      this.setData({
        cindex: i
      })
    }
  }
})
