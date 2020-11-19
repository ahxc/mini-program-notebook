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