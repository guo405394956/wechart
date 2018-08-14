Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      name:"请输入名字",
      pwd:"请输入密码",
      dep:"请选择部门",
      tel:"请输入电话"
    },
    accounts: ["研发部", "服务部", "测试部"]
  },

  /**
   * 存储用户信息到本地缓存
   */
  setUser:function(){
    wx.setStorage({
      key: "user",
      data: this.data.user
    })
  },
  
  /**
   * 获取本地存储的用户信息
   */
  getUser:function(){
    let that = this;
    wx.getStorage({
      key: 'user',
      success: function (res) {
        let user = res.data;
        console.log(user);
        that.setData({
          user: user
        });
      }
    })
  },

  /**
   * 表单数据提交
   */
  formSubmit: function (e) {　
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    this.setData({
      user:e.detail.value
    });
    this.setUser();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})