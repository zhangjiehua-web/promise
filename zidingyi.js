function Promise(executor) {
    //添加属性
    this.promiseState = 'pending'
    this.promiseResult = null
    // 声明属性
    this.callback = {}

    const _this = this // 保存实例化this
    //resolve函数
    function resolve(data) {
        //添加状态判断，确保状态值只修改一次
        if(_this.promiseState !== 'pending') return
        // 修改对象的状态（promiseState）
        _this.promiseState = 'fulfilled'
        // 设置对象结果值（promiseResult）
        _this.promiseResult = data
        //调用成功的回调函数
        if(_this.callback.onSolved){
            _this.callback.onSolved(data)
        }

    }
    //reject函数
    function reject(data) {
        //添加状态判断，确保状态值只修改一次
        if(_this.promiseState !== 'pending') return
        // 修改对象的状态（promiseState）
        _this.promiseState = 'rejected'
        // 设置对象结果值（promiseResult）
        _this.promiseResult = data
        // 调用失败的回调函数
        if(_this.callback.onRejected){
            _this.callback.onRejected(data)
        }
    }
    //  执行器函数是同步调用的
    try{
        executor(resolve, reject)
    }catch (e) {
        reject(e)
    }
}
//添加then方法
Promise.prototype.then = function(onSolved,onRejected) {
    if (this.promiseState === 'fulfilled'){
        onSolved(this.promiseResult)
    }
    if(this.promiseState === 'rejected'){
        onRejected(this.promiseResult)
    }
    if(this.promiseState === 'pending'){
        //保存回调函数
        this.callback = {
            onSolved:onSolved,
            onRejected:onRejected
        }
    }
}
