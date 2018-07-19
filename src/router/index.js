import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import App1 from "../App1"
import DaoHangYi from '../components/DaoHangYi'
import DaoHangEr from '../components/DaoHangEr'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,

    },
    {
      path: '/main',
      name: 'App1',
      component: App1,
      children: [
        {path: '/main/daohangyi', component: DaoHangYi},
        {path: '/main/daohanger', component: DaoHangEr}

      ]
    }
  ],
  mode: "history"
})
