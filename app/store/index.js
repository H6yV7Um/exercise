import Vue from 'vue';
import Vuex from 'vuex';
import { GROW_UP } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  // 状态存储对象
  state: {
    count: 0,
    name: 'showjoy',
    age: 0
  },
  // 突变方法, 只能是同步方法
  mutations: {
    // 突变名，需要主动commit才会触发，可以类比事件注册，触发机制
    increment(state, args) {
      state.count++;
      console.log(args);
    },
    [GROW_UP](state, playload) {
      state.age += playload.age;
    }
  },
  // 相当于computed 计算属性
  getters: {
    young(state) {
      return state.count <= 18;
    }
  },
  // action提交的是mutation， 不直接变更状态，可以包含异步操作
  actions: {
    increment(ctx) {
      ctx.commit();
    },
    grow({ commit }) {
      commit('GROW_UP');
    }
  }
});
