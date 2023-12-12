
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","background":"#efeff4","navigationBar":{"backgroundColor":"#F8F8F8","style":"custom","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"AIcoach","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.98","entryPagePath":"pages/login/login","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#F8F8F8","selectedColor":"#cdcdcd","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","list":[{"pagePath":"pages/schedule/schedule","text":"计划","iconPath":"/static/schedule.png","selectedIconPath":"/static/selected_schedule.png"},{"pagePath":"pages/AIcoach/AIcoach","text":"AI教练","iconPath":"/static/application-ai.png","selectedIconPath":"/static/selected-application-ai.png"},{"pagePath":"pages/social/social","text":"星球","iconPath":"/static/planet.png","selectedIconPath":"/static/selected_planet.png"},{"pagePath":"pages/user/user","text":"用户","iconPath":"/static/user.png","selectedIconPath":"/static/selected_user.png"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/login/login","meta":{"isQuit":true,"isEntry":true,"enablePullDownRefresh":false,"navigationBar":{"type":"default"},"isNVue":false}},{"path":"pages/register/register","meta":{"enablePullDownRefresh":false,"navigationBar":{"type":"default"},"isNVue":false}},{"path":"pages/schedule/schedule","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":0,"enablePullDownRefresh":false,"navigationBar":{"type":"default"},"isNVue":false}},{"path":"pages/AIcoach/AIcoach","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"enablePullDownRefresh":false,"navigationBar":{"type":"default"},"isNVue":false}},{"path":"pages/social/social","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"enablePullDownRefresh":false,"navigationBar":{"type":"default"},"isNVue":false}},{"path":"pages/user/user","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"enablePullDownRefresh":false,"navigationBar":{"type":"default"},"isNVue":false}},{"path":"pages/user/bodyData/bodyData","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"新页面","type":"default"},"isNVue":false}},{"path":"pages/schedule/chatAI/chatAI","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"ChatAI","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  