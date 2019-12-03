// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (send, context) => {
  const wxContext = cloud.getWXContext()
  db.collection('teacher').where({
    id:send.teacherID
  }).get({
    success:function(res){
     var receive={
       name:res.data[0].subject,
       chapNum:res.data[0].sub_chapter,
       classes:'卓工班'
     }
    }
  })
  return receive 
}