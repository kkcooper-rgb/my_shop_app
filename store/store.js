import Vue from 'vue'
import Vuex from 'vuex'

import Cart from '@/store/modules/cart.js'
import User from '@/store/modules/user.js'

// 2. 将 Vuex 安装为 Vue 的插件
Vue.use(Vuex)

// 3. 创建 Store 的实例对象
const store = new Vuex.Store({
  // TODO：挂载 store 模块
  modules: {
	  m_cart:Cart,
	  m_user:User
  },
})

// 4. 向外共享 Store 的实例对象
export default store