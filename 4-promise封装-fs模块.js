/*
* 封装一个函数 mineReadFile 读取文件内容
*参数： path 文件路径
* 返回： prommise对象
* */
function mineReadFile(path){
    return new Promise((resolve, reject) => {
        //  读取文件
        require('fs').readFile(path,(err,data)=>{
            //  判断
            //  失败
            if (err) reject(err)
            //  成功
            resolve(data)

        })
    })
}
mineReadFile('./content.txt')
.then(value => {
    console.log(value.toString())
},reason => {
    throw reason
})
