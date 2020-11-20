// pages/img/img.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: "男",
    num: 0,
    msg: "hello mina",
    list: [
      {
        id: 0,
        name: "zx"
      },
      {
        id: 1,
        name: "xz"
      }
    ],
    checkboxlist: [
      {id: 1, name: "no.1"},
      {id: 2, name: "no.2"},
      {id: 3, name: "no.3"},
    ],
    checkedlist: [],
    person: {
      name: "zx",
      age: "26"
    },
    // html: `<div></div>`
    html: [
      {
        name: "div",
        attrs:{
          class: "",
          style: ""
        },
        children:[
          {
            name: "",
            attrs: {},
            children: []
          }
        ]
      }
    ],
  },
  ebodyHandle(e) {
    console.log(e.detail, "你收到了子组件的消息")
  },
  handleInput(e) {
    this.setData({
      num: e.detail.value,// 与vue不同，将input中的value赋值给data不是this.name
    })
  },
  handleGender(e) {
    let gender = e.detail.value
    this.setData({
      gender: gender
    })
  },
  handleList(e) {
    let checked = e.detail.value
    this.setData({
      checkedlist: checked
    })
  },
  getPhoneNumber(e) {
    /* 需要用户自己搭建服务器来解密获取的信息 */
  },
  getUserInfo(e) {
    /* 获取用户信息，这个还是比较方便 */
    console.log(e)
  },
  handleTap(e) {// 虽然wxml已通过operation定义实参，但函数接收的还是事件对象
    console.log(e)
    this.setData({
      num: this.data.num+e.currentTarget.dataset.operation
    })
  },
  /* 页面生命周期函数 */
  /**
   * 1.生命周期函数--监听页面加载，发送异步请求来初始化数据
   */
  onLoad: function (options) {
  },

  /**
   * 2.生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 3.生命周期函数--监听页面显示，页面调用出来的显示
   */
  onShow: function () {
  },

  /**
   * 4.生命周期函数--监听页面隐藏，页面隐藏未销毁
   */
  onHide: function () {
  },

  /**
   * 5.生命周期函数--监听页面卸载，意思就是关闭，在navigator属性open-type中的redirect，relaunch，
   * navigateBack可触发
   */
  onUnload: function () {
  },

  /**
   * 6.页面相关事件处理函数--监听用户下拉动作，可做下拉刷新等操作 
   */
  onPullDownRefresh: function () {
  },

  /**
   * 7.页面上拉触底事件的处理函数，需要页面出现上下滚动才行，没有弹簧效果
   */
  onReachBottom: function () {
  },

  /**
   * 8.用户点击右上角分享，分享页面时执行的操作
   */
  onShareAppMessage: function () {
  },
  /**
   * 9.页面滚动即可触发
   */
  onPageScroll: function() {
  },
  /**
   * 10.页面尺寸发生变化则触发，比如横竖屏切换
   */
  onResize: function() {
  },
  /**
   * 11.当前页时tabbar页面，且点击tabbar页面时触发
   */
  onTabItemTab: function() {
  }
})