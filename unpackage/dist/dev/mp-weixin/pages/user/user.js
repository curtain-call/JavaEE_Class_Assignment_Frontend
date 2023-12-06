"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    handleButtonClick() {
      console.log("按钮被点击了");
    }
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleButtonClick && $options.handleButtonClick(...args)),
    b: common_vendor.o((...args) => $options.handleButtonClick && $options.handleButtonClick(...args)),
    c: common_vendor.o((...args) => $options.handleButtonClick && $options.handleButtonClick(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/javaEE/ClassAssignment/frontend/AIcoach/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
