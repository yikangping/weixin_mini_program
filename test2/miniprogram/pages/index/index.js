// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    problems: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   const db = wx.cloud.database()
  //   db.collection("books").get({
  //     success: res => {
  //       this.setData({
  //         books: res.data
  //       })
  //     }, fail: err => {
  //       wx.showToast({
  //         icon: "none",
  //         title: '查询记录失败',
  //       })
  //     }
  //   })
  // },
  goSet1: function(){
    wx.navigateTo({
      url: "../set1/set1",
    })
  },
  goSet2:function(){
    wx.navigateTo({
      url: '../set2/set2',
    })
  },
  goSet3: function () {
    wx.navigateTo({
      url: '../set3/set3',
    })
  },
    goSet4: function () {
    wx.navigateTo({
      url: '../set4/set4',
    })
  },
    goSet:function(){
      const db = wx.cloud.database()
      var send={
        teacherID:"001"
      }
      // var receive=myfunction(send)
      // // var receive=wx.cloud.callFunction({
      // //   name:'search',
      // //   data:send
      //   // success: res => {
      //   //   console.log(res.data)
      //   //   wx.navigateTo({
      //   //     url: "../index/index",
      //   //   })
      //   // },
      //   // fail: err => {
      //   //   wx.showToast({
      //   //     icon: 'none',
      //   //     title: '出错啦！请稍后重试'
      //   //   })
      //   //   console.error
      //   // }
      // // })
      // console.log(receive)
      db.collection("teacher").where({
        id:"001"
      }).get({
        success:res=>{
          var receive = {
            name: res.data[0].subject,
            chapNum: res.data[0].sub_chapter,
            classes: '卓工班'
          }
          console.log(receive)
        }
      })
    }
})