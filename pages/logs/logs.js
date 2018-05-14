//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    });
    var worker = wx.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径
    worker.postMessage({
      msg: 'hello worker'
    });
    worker.onMessage(function(res){
      wx.showToast({
        title: res,
      })
    });
  }
})
