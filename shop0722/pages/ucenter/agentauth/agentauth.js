// pages/ucenter/agentauth/agentauth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_add_z: "/static/images/img_add.png",
    img_add_f: "/static/images/img_add.png",
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

  },
  onSave: function (e) {
    // var token = wx.getStorageSync('token');
    // if (token == '' || token == null) {
    //   wx.navigateTo({
    //     url: '/pages/auth/btnAuth/btnAuth',
    //   })
    //   return;
    // }
    var form = e.detail.value;

    var nickname = form.nickname;
    var photo = form.photo;

    console.log("11111111->" + nickname + "," + photo);
  },
  chooseImage: function () {

    var that = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          photo: tempFilePaths[0]
        })
      }
    })
  },




})