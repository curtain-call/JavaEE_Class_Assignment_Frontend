"use strict";
const uni_modules_uniCalendar_components_uniCalendar_util = require("./util.js");
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uniCalendar_components_uniCalendar_i18n_index = require("./i18n/index.js");
require("./calendar.js");
const CalendarItem = () => "./uni-calendar-item.js";
const { t } = common_vendor.initVueI18n(uni_modules_uniCalendar_components_uniCalendar_i18n_index.i18nMessages);
const _sfc_main = {
  components: {
    CalendarItem
  },
  emits: ["close", "confirm", "change", "monthSwitch"],
  props: {
    date: {
      type: String,
      default: ""
    },
    selected: {
      type: Array,
      default() {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: String,
      default: ""
    },
    endDate: {
      type: String,
      default: ""
    },
    range: {
      type: Boolean,
      default: false
    },
    insert: {
      type: Boolean,
      default: true
    },
    showMonth: {
      type: Boolean,
      default: true
    },
    clearDate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false,
      weeks: [],
      calendar: {},
      nowDate: "",
      aniMaskShow: false
    };
  },
  computed: {
    /**
     * for i18n
     */
    okText() {
      return t("uni-calender.ok");
    },
    cancelText() {
      return t("uni-calender.cancel");
    },
    todayText() {
      return t("uni-calender.today");
    },
    monText() {
      return t("uni-calender.MON");
    },
    TUEText() {
      return t("uni-calender.TUE");
    },
    WEDText() {
      return t("uni-calender.WED");
    },
    THUText() {
      return t("uni-calender.THU");
    },
    FRIText() {
      return t("uni-calender.FRI");
    },
    SATText() {
      return t("uni-calender.SAT");
    },
    SUNText() {
      return t("uni-calender.SUN");
    }
  },
  watch: {
    date(newVal) {
      this.init(newVal);
    },
    startDate(val) {
      this.cale.resetSatrtDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    endDate(val) {
      this.cale.resetEndDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    selected(newVal) {
      this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
      this.weeks = this.cale.weeks;
    }
  },
  created() {
    this.cale = new uni_modules_uniCalendar_components_uniCalendar_util.Calendar({
      selected: this.selected,
      startDate: this.startDate,
      endDate: this.endDate,
      range: this.range
    });
    this.init(this.date);
  },
  methods: {
    // 取消穿透
    clean() {
    },
    bindDateChange(e) {
      const value = e.detail.value + "-1";
      this.setDate(value);
      const { year, month } = this.cale.getDate(value);
      this.$emit("monthSwitch", {
        year,
        month
      });
    },
    /**
     * 初始化日期显示
     * @param {Object} date
     */
    init(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.calendar = this.cale.getInfo(date);
    },
    /**
     * 打开日历弹窗
     */
    open() {
      if (this.clearDate && !this.insert) {
        this.cale.cleanMultipleStatus();
        this.init(this.date);
      }
      this.show = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.aniMaskShow = true;
        }, 50);
      });
    },
    /**
     * 关闭日历弹窗
     */
    close() {
      this.aniMaskShow = false;
      this.$nextTick(() => {
        setTimeout(() => {
          this.show = false;
          this.$emit("close");
        }, 300);
      });
    },
    /**
     * 确认按钮
     */
    confirm() {
      this.setEmit("confirm");
      this.close();
    },
    /**
     * 变化触发
     */
    change() {
      if (!this.insert)
        return;
      this.setEmit("change");
    },
    /**
     * 选择月份触发
     */
    monthSwitch() {
      let {
        year,
        month
      } = this.nowDate;
      this.$emit("monthSwitch", {
        year,
        month: Number(month)
      });
    },
    /**
     * 派发事件
     * @param {Object} name
     */
    setEmit(name) {
      let {
        year,
        month,
        date,
        fullDate,
        lunar,
        extraInfo
      } = this.calendar;
      this.$emit(name, {
        range: this.cale.multipleStatus,
        year,
        month,
        date,
        fulldate: fullDate,
        lunar,
        extraInfo: extraInfo || {}
      });
    },
    /**
     * 选择天触发
     * @param {Object} weeks
     */
    choiceDate(weeks) {
      if (weeks.disable)
        return;
      this.calendar = weeks;
      this.cale.setMultiple(this.calendar.fullDate);
      this.weeks = this.cale.weeks;
      this.change();
    },
    /**
     * 回到今天
     */
    backToday() {
      const nowYearMonth = `${this.nowDate.year}-${this.nowDate.month}`;
      const date = this.cale.getDate(/* @__PURE__ */ new Date());
      const todayYearMonth = `${date.year}-${date.month}`;
      if (nowYearMonth !== todayYearMonth) {
        this.monthSwitch();
      }
      this.init(date.fullDate);
      this.change();
    },
    /**
     * 上个月
     */
    pre() {
      const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
      this.setDate(preDate);
      this.monthSwitch();
    },
    /**
     * 下个月
     */
    next() {
      const nextDate = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
      this.setDate(nextDate);
      this.monthSwitch();
    },
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.cale.getInfo(date);
    }
  }
};
if (!Array) {
  const _component_calendar_item = common_vendor.resolveComponent("calendar-item");
  _component_calendar_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.insert && $data.show
  }, !$props.insert && $data.show ? {
    b: $data.aniMaskShow ? 1 : "",
    c: common_vendor.o((...args) => $options.clean && $options.clean(...args))
  } : {}, {
    d: $props.insert || $data.show
  }, $props.insert || $data.show ? common_vendor.e({
    e: !$props.insert
  }, !$props.insert ? {
    f: common_vendor.t($options.cancelText),
    g: common_vendor.o((...args) => $options.close && $options.close(...args)),
    h: common_vendor.t($options.okText),
    i: common_vendor.o((...args) => $options.confirm && $options.confirm(...args))
  } : {}, {
    j: $props.showMonth
  }, $props.showMonth ? {
    k: common_vendor.t($data.nowDate.month)
  } : {}, {
    l: common_vendor.t($options.SUNText),
    m: common_vendor.t($options.monText),
    n: common_vendor.t($options.TUEText),
    o: common_vendor.t($options.WEDText),
    p: common_vendor.t($options.THUText),
    q: common_vendor.t($options.FRIText),
    r: common_vendor.t($options.SATText),
    s: common_vendor.f($data.weeks, (item, weekIndex, i0) => {
      return {
        a: common_vendor.f(item, (weeks, weeksIndex, i1) => {
          return {
            a: common_vendor.o($options.choiceDate, weeksIndex),
            b: "b6ab2cfb-0-" + i0 + "-" + i1,
            c: common_vendor.p({
              weeks,
              calendar: $data.calendar,
              selected: $props.selected,
              lunar: $props.lunar
            }),
            d: weeksIndex
          };
        }),
        b: weekIndex
      };
    }),
    t: !$props.insert ? 1 : "",
    v: $data.aniMaskShow ? 1 : ""
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b6ab2cfb"], ["__file", "E:/javaEE/ClassAssignment/frontend/AIcoach/uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue"]]);
wx.createComponent(Component);
