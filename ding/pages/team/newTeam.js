// pages/team/newTeam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    team:{
      name:"",
      member:[
        {name:""}
      ]
    },
    memberList:[
      { name: 'guorong', value: 'guorong', checked: false },
      { name: 'zhengtao', value: 'zhengtao', checked: false },
    ]
  },

  //选择框操作
  checkboxChange:function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  //保存圈子名称
  saveNewTeam:{

  },

  //取消操作，返回首页
  backToHome:{

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