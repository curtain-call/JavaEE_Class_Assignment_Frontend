import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode } from "vue";
import { defineStore, mapStores } from "pinia";
function formatAppLog(type, filename, ...args) {
  if (uni.__log__) {
    uni.__log__(type, filename, ...args);
  } else {
    console[type].apply(console, [...args, filename]);
  }
}
const useUserStore = defineStore("user", {
  unistorage: true,
  state: () => {
    return {
      "account": "",
      "password": "string",
      "nickname": "string",
      "followerNum": 0,
      "fanNum": 0,
      "likeNum": 0,
      "bodyDataList": [{
        "id": 0,
        "account": "string",
        "weight": 0,
        "height": 0,
        "bmi": 0,
        "age": 0
      }],
      "trainingPlanList": [{
        "id": 0,
        "account": "string",
        "startTime": 0,
        "endTime": 0,
        "motionList": [{
          "id": 0,
          "account": "string",
          "name": "string",
          "description": "string",
          "status": true,
          "standardVideoUrl": "string",
          "userUploadVideoUrl": "string",
          "imageUrl": "string"
        }]
      }],
      "motionList": [{
        "id": 0,
        "account": "string",
        "name": "string",
        "description": "string",
        "status": true,
        "standardVideoUrl": "string",
        "userUploadVideoUrl": "string",
        "imageUrl": "string"
      }]
    };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    }
  }
});
const _style_0 = { "container-subnvue": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center" } }, "slogan-wrapper": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center" } }, "slogan": { "": { "fontSize": 32, "color": "#FFFFFF", "alignSelf": "center" } }, "login-form": { "": { "width": 200, "height": 200, "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "paddingTop": 20, "display": "flex", "alignItems": "center" } }, "login-input": { "": { "width": 200, "height": 40, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "marginBottom": 15, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#cccccc", "borderRadius": 5, "color": "#000000", "zIndex": 2, "backgroundColor": "#cccccc" } }, "button-wrapper": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "login-button": { "": { "height": 50, "width": 90, "marginRight": 10, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "backgroundColor": "#007aff", "color": "#FFFFFF", "borderWidth": 0, "borderColor": "#000000", "borderRadius": 5, "fontSize": 16 } }, "register-button": { "": { "height": 50, "width": 90, "marginLeft": 10, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "backgroundColor": "#A9A9A9", "color": "#FFFFFF", "borderWidth": 0, "borderColor": "#000000", "borderRadius": 5, "fontSize": 16 } } };
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  computed: {
    ...mapStores(useUserStore)
  },
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    login() {
      let user = this.userStore;
      uni.request({
        url: "http://192.168.43.98:8080/users/login",
        data: {
          account: this.account,
          password: this.password
        },
        header: {
          "content-type": "application/json"
        },
        timeout: 6e4,
        method: "POST",
        success(res) {
          user.$state = res.data;
          uni.reLaunch({
            url: "/pages/schedule/schedule",
            success() {
              formatAppLog("log", "at pages/login/login/login.nvue:57", "success");
            }
          });
        },
        fail: (res) => {
          formatAppLog("log", "at pages/login/login/login.nvue:62", res);
        }
      });
    },
    toRegister() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("div", { class: "container-subnvue" }, [
      createElementVNode("div", { class: "slogan-wrapper" }, [
        createElementVNode("u-text", { class: "slogan" }, "Don't wish for it,"),
        createElementVNode("u-text", { class: "slogan" }, "work for it.")
      ]),
      createElementVNode("div", { class: "login-form" }, [
        createElementVNode("u-input", {
          class: "login-input",
          type: "text",
          placeholder: "账号",
          modelValue: $data.account,
          onInput: _cache[0] || (_cache[0] = ($event) => $data.account = $event.detail.value)
        }, null, 40, ["modelValue"]),
        createElementVNode("u-input", {
          class: "login-input",
          type: "password",
          placeholder: "密码",
          modelValue: $data.password,
          onInput: _cache[1] || (_cache[1] = ($event) => $data.password = $event.detail.value)
        }, null, 40, ["modelValue"]),
        createElementVNode("div", { class: "button-wrapper" }, [
          createVNode(_component_button, {
            class: "login-button",
            onClick: $options.login
          }, {
            default: withCtx(() => [
              createTextVNode("登录")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          createVNode(_component_button, {
            class: "register-button",
            onClick: $options.toRegister
          }, {
            default: withCtx(() => [
              createTextVNode("注册")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ])
    ])
  ]);
}
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/javaEE/ClassAssignment/frontend/AIcoach/pages/login/login/login.nvue"]]);
export {
  login as default
};
