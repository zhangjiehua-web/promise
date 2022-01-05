//  util.promisify 传入一个遵循常见的错误优先的回调风格的函数
//  即以 (err,value)=>.... 回调作为最后一个参数，并返回一个返回promise的版本

//  引入util 模块
const util = require('util')
//  引入 fs 模块
const  fs = require('fs')

let mineReadFile = util.promisify(fs.readFile)
mineReadFile('./content.txt').then((value) => {
    console.log(value.toString())
});
