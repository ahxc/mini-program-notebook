// app应用生命周期
App({
  // 1.onLaunch应用第一次启动就会触发的事件
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 2.应用被用户看到时触发，可在重新看到时做一些页面效果重置如swiper，定时器
  onShow() {
  },
  // 3.应用被被隐藏时触发，可以停止一些动画效果如swiper，定时器
  onHide() {
  },
  // 4.应用的代码发生报错触发，通过异步发送到后台，下次升级可参考
  onError(err) {
  },
  // 5.页面找不到时就会触发，如果页面找不到可以通过js的方式重新跳转第二个首页，不能跳到tabbar，和导航组件类似
  onPageNotFound() {
    wx.navigateTo({
      url: 'url',
    })
  },
  globalData: {
    userInfo: null
  }
})