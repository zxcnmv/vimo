// 配置
import PLATFORM_CONFIGS from './config/platform-configs'
import APP_CONFIGS from './config/app-configs'
import router from './router'
import Vue from 'vue'
import App from './App'
import attachFastClick from 'fastclick'
import vimo from 'vimo'

import { ActionSheet } from 'vimo/components/action-sheet'
import { Loading } from 'vimo/components/loading'
import { Alert } from 'vimo/components/alert'
import { Toast } from 'vimo/components/toast'
import { Modal } from 'vimo/components/modal'
import { Icon } from 'vimo/components/icon'
import { Backdrop } from 'vimo/components/backdrop'

/* eslint-disable no-new */
new attachFastClick(document.body)
// Vue.config.productionTip = false;
// 平台基础安装
Vue.use(vimo, {
  custConf: APP_CONFIGS,
  pltConf: PLATFORM_CONFIGS,
})

Vue.component(Backdrop.name, Backdrop)
Vue.component(Icon.name, Icon)
Vue.prototype.$actionSheet = ActionSheet
Vue.prototype.$loading = Loading
Vue.prototype.$alert = Alert
Vue.prototype.$toast = Toast
Vue.prototype.$modal = Modal

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  mounted () {},
  created () {},
  components: {App}
})


window.onerror = function(err){
  alert(err)
}