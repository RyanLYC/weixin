//index.js
Page({
  data: {
    username: 'admin',
    password: '123'
  },
  inputChangeHandle: function (e) {
    //console.log(e);
    var prop = e.currentTarget.dataset['prop']  //获取要修改的属性
    var changed = {}
    changed[prop] = e.detail.value  //获取值

    this.setData(changed)
  },
  // 用于处理登录按钮点击的事件
  loginHandle: function () {
    console.log(this.data) //更新后的值 提交服务器
  }
})
