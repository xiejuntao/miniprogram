// pages/life/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt:"人生如斯，情真情痴。"
    , img:"../../img/0.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
    var i = 0;
    console.log("onReady");
    setInterval(function () {
      i = i + 1;
      console.log("i=" + i);
      self.setData({ "img": "../../img/" + i % 7 + ".jpg" },function(){
        console.log("setted");
      });
    }, 3000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'life',
      path: 'pages/life/index?id=123'
    }
  }
})