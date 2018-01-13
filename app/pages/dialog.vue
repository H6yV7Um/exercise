<template>
  <div id="dialog2">
    <div id="main">
      hello world
    </div>
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
    }
  },
  mounted() {
    // 观察者列表
    function ObserverList() {
      this.observerlist = [];
    }
    ObserverList.prototype.add = function(obj) {
      this.observerlist.push(obj);
    };

    ObserverList.prototype.count = function() {
      return this.observerlist.length;
    };

    ObserverList.prototype.get = function( index ){
      if( index > -1 && index < this.observerList.length ){
        return this.observerList[ index ];
      }
    };

    // 目标
    function Subject() {
      this.observers = new ObserverList();
    }

    // 添加观察者
    Subject.prototype.addObserver = function(observer) {
      this.observers.add(observer);
    };

    // 状态变更需通知观察者，调用其更新方法
    Subject.prototype.notify = function(context) {
      var observerCount = this.observers.count();
      for(var i=0; i < observerCount; i++){
        this.observers.get(i).update( context );
      }
    };

    // 观察者
    function Observer() {
      this.update = function(ctx) {
        console.log(ctx);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.35);
  text-align: center;
  z-index: 10;
  #main {
    background: white;
    display: inline-block;
    border: 1px solid #ccc;
    text-align: left;
    vertical-align: middle;
    position: relative;
  }
  &:after {
    display: inline-block;
    content: '';
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
}
#dialog2 {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.35);
  #main {
    background: white;
    border: 1px solid #ccc;
    width: 200px;
    height: 300px;
  }
}
#dialog3 {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.35);
  #main {
    width: 200px;
    height: 300px;
    margin: 0 auto;
    border: 1px solid red;
    position: relative;
    top: 50%;
    transform: translateY(-50%)
  }
}
</style>
