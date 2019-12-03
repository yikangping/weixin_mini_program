const cloud = require('wx-server-sdk')
cloud.init();
const db = cloud.database();

// 云函数入口函数
exports.main = async (problem, context) => {
  const wxContext = cloud.getWXContext()//目的：获取_openid

  try {
    return await db.collection("problem").add({
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
        title: '添加成功',
        })
      }, fail: err => {
        wx.showToast({
        icon: 'none',
        title: '添加失败',
        })
      }
    })
  } catch (e) {
    console.log(e)
  }
}