"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // pinia-ns:pinia
  var require_pinia = __commonJS({
    "pinia-ns:pinia"(exports, module) {
      module.exports = uni.Pinia;
    }
  });

  // ../../../../javaEE/ClassAssignment/frontend/AIcoach/unpackage/dist/dev/.nvue/pages/login/login/login.js
  var import_vue = __toESM(require_vue());
  var import_pinia = __toESM(require_pinia());
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  var useUserStore = (0, import_pinia.defineStore)("user", {
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
  var _style_0 = { "container-subnvue": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center" } }, "slogan-wrapper": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center" } }, "slogan": { "": { "fontSize": 32, "color": "#FFFFFF", "alignSelf": "center" } }, "login-form": { "": { "width": 200, "height": 200, "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "paddingTop": 20, "display": "flex", "alignItems": "center" } }, "login-input": { "": { "width": 200, "height": 40, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "marginBottom": 15, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#cccccc", "borderRadius": 5, "color": "#000000", "zIndex": 2, "backgroundColor": "#cccccc" } }, "button-wrapper": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "login-button": { "": { "height": 50, "width": 90, "marginRight": 10, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "backgroundColor": "#007aff", "color": "#FFFFFF", "borderWidth": 0, "borderColor": "#000000", "borderRadius": 5, "fontSize": 16 } }, "register-button": { "": { "height": 50, "width": 90, "marginLeft": 10, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "backgroundColor": "#A9A9A9", "color": "#FFFFFF", "borderWidth": 0, "borderColor": "#000000", "borderRadius": 5, "fontSize": 16 } } };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var _sfc_main = {
    computed: __spreadValues({}, (0, import_pinia.mapStores)(useUserStore)),
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
    const _component_button = (0, import_vue.resolveComponent)("button");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("div", { class: "container-subnvue" }, [
        (0, import_vue.createElementVNode)("div", { class: "slogan-wrapper" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "slogan" }, "Don't wish for it,"),
          (0, import_vue.createElementVNode)("u-text", { class: "slogan" }, "work for it.")
        ]),
        (0, import_vue.createElementVNode)("div", { class: "login-form" }, [
          (0, import_vue.createElementVNode)("u-input", {
            class: "login-input",
            type: "text",
            placeholder: "\u8D26\u53F7",
            modelValue: $data.account,
            onInput: _cache[0] || (_cache[0] = ($event) => $data.account = $event.detail.value)
          }, null, 40, ["modelValue"]),
          (0, import_vue.createElementVNode)("u-input", {
            class: "login-input",
            type: "password",
            placeholder: "\u5BC6\u7801",
            modelValue: $data.password,
            onInput: _cache[1] || (_cache[1] = ($event) => $data.password = $event.detail.value)
          }, null, 40, ["modelValue"]),
          (0, import_vue.createElementVNode)("div", { class: "button-wrapper" }, [
            (0, import_vue.createVNode)(_component_button, {
              class: "login-button",
              onClick: $options.login
            }, {
              default: (0, import_vue.withCtx)(() => [
                (0, import_vue.createTextVNode)("\u767B\u5F55")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            (0, import_vue.createVNode)(_component_button, {
              class: "register-button",
              onClick: $options.toRegister
            }, {
              default: (0, import_vue.withCtx)(() => [
                (0, import_vue.createTextVNode)("\u6CE8\u518C")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"])
          ])
        ])
      ])
    ]);
  }
  var login = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/javaEE/ClassAssignment/frontend/AIcoach/pages/login/login/login.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/login/login/login";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    login.mpType = "page";
    const app = Vue.createPageApp(login, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...login.styles || []]));
    app.mount("#root");
  }
})();
