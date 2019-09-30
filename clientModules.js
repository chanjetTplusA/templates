// 每个应用模块需要在此注册才能加载
module.exports = {
  "mobile-navigator": cb => {
    require.ensure([], require => {
      cb(require("tplus-mobile-navigator"));
    },"mobile-navigator");
  },
  "api": cb => {
    require.ensure([], require => {
      cb(require("tplus-api"));
    },"api");
  },
  "mobilelogin": cb => {
    require.ensure([], require => {
      cb(require("tplus-mobilelogin"));
    },"mobilelogin");
  }
}