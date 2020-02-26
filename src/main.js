import Vue from 'vue';

import Money from './component';
import VMoney from './directive';
import options from './options';
// const VERSION = proccess.env.VERSION;
import DocsComponent from './docs/docs';

export { Money, VMoney, options /*, VERSION */ };

function install(Vue, globalOptions) {
  if (globalOptions) {
    Object.keys(globalOptions).map(function(key) {
      options[key] = globalOptions[key];
    });
  }
  Vue.directive('money', VMoney);
  Vue.component('money', Money);
}

export default install;

// Install by default if included from script tag
Vue.use(install);

new Vue({
  render: h => h(DocsComponent),
}).$mount('#app');
