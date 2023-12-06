"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      colors: ["green", "blue", "purple", "purple", "green"],
      // 滚动遮罩效果
      scrollTop: 0,
      headerOpacity: 1
    };
  },
  methods: {
    handleScroll(e) {
      console.log("be functioning");
      const scrollTop = e.detail.scrollTop;
      let newOpacity = 1;
      if (scrollTop > 10) {
        newOpacity = Math.max(1 - (scrollTop - 10) / 100, 0);
      }
      this.headerOpacity = newOpacity;
    }
  },
  mounted() {
  }
};
if (!Array) {
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_calendar2 + _easycom_uni_card2)();
}
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_calendar + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.colors, (color, index, i0) => {
      return {
        a: common_vendor.n(color)
      };
    }),
    b: common_vendor.p({
      insert: true,
      lunar: false,
      ["start-date"]: "2023-5-22",
      ["end-date"]: "2024-3-22",
      showMonth: false,
      range: false
    }),
    c: $data.headerOpacity,
    d: common_vendor.o((...args) => $options.handleScroll && $options.handleScroll(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/javaEE/ClassAssignment/frontend/AIcoach/pages/schedule/schedule.vue"]]);
wx.createPage(MiniProgramPage);
