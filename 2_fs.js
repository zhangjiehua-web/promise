// 调用node.js 的 fs模块进行文字打印,在控制台执行 node 2fs.js即可查看文本内容
const fs = require('fs')
// fs.readFile('./content.txt',(err,data)=>{
//     // err 错误  data  返回的数据
//     // 如果出错 则抛出错误
//     if (err) throw err
//     // 输出文件内容
//     console.log(data.toString())
//
// })

// promise方式
const p = new Promise((resolve,reject)=>{
    fs.readFile('./content.txt',(err,data)=>{
        if (err) reject(err)
        resolve(data)

    })
})
p.then((value)=>{
    console.log(value.toString())
},(reason)=>{
    throw reason
})
