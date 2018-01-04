<template>
  <div>
    <currency-input :customprop="abc" @customevent="(val) => {this.abc = val;}"></currency-input>{{ abc }}
    <button @click="click">da</button>
  </div>
</template>

<script>
import CurrencyInput from 'app/components/currency-input/src/index';

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
  methods: {
    changedGroup(val) {
      console.log(val);
    },
    changeDate(selected) {
      console.log('current date:', selected);
    },
    click() {
      this.abc = 'fff';
      // 提交突变，commit mutation, 执行store中mutations突变对象中定义的突变方法
      this.$store.commit('increment', {a: 1});
    }
  },
  mounted() {
    console.log(this.$store.state);
  }
};
</script>
<style lang="scss" scoped>
</style>
