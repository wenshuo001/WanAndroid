// pages/homepage/homepage.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
     

    wx.request({
      url: 'http://www.wanandroid.com/banner/json', //仅为示例，并非真实的接口地址
      
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
         that.setData({
          bannerdata: res.data.data,
         })
        // for (var i = 0; i < res.data.length; i++) {
        //   this.data.imgUrls[i] = res.data.data[i].imagePath;
        // }
       
      }
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