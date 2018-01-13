<template>
  <div>
    <currency-input :customprop="abc" @customevent="(val) => {this.abc = val;}"></currency-input>{{ abc }}
    <button @click="click">da</button>
  </div>
</template>

<script>
import CurrencyInput from 'app/components/currency-input/src/index';
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    CurrencyInput
  },
  data() {
    return {
      html: '',
      abc: 333
    };
  },
  computed: {
    age() {
      return 28;
    },
    ...mapState({
      nameAlias: 'name',
      countAlias: (state) => state.count,
      info(state) {
        return `${ state.name} ${ this.age }`;
      }
    }),
    ...mapGetters(['young'])
  },
  methods: {
    ...mapMutations({
      add: 'increment'
    }),
    changedGroup(val) {
      console.log(val);
    },
    changeDate(selected) {
      console.log('current date:', selected);
    },
    click() {
      this.abc = 'fff';
      // 提交突变，commit mutation, 执行store中mutations突变对象中定义的突变方法
      this.add({a: 1});
      this.$store.commit('GROW_UP', { age: 18 });
      console.log(this.young);
    }
  },
  mounted() {
    console.log(this.countAlias, this.nameAlias, this.info, this.young);
  }
};
</script>
<style lang="scss" scoped>
</style>
