const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    problem: []
  },
  comfirm: function (e) {
    const db = wx.cloud.database()//打开数据库连接
    let problem = e.detail.value
    wx.cloud.callFunction({
      name: 'add',
      data: {
        _id: problem._id,
        id: problem.id,
        chapter: problem.chapter,
        answer: problem.answer,
        choice1: problem.choice1,
        choice2: problem.choice2,
        choice3: problem.choice3,
        choice4: problem.choice4,
        content: problem.content,
        score: problem.score,
        subject: problem.subject,
        type: problem.type
      }, success: res => {
        wx.showToast({
          duration: 4000,
          title: '添加成功'
        })
        wx.navigateTo({
          url: "../index/index",
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '出错啦！请稍后重试'
        })
        console.error
      }
    })
  }
}) 



