<template>
  <div>
    <div class="wrapper">
      <div class="left">f d d</div>
      <div class="right">fdsaf</div>
      <div class="center">fdsaf</div>
    </div>
    <div class="cssmargin">
      <span>hhfkdsahf</span>
      <span>hhfkdsahf</span>
      <p>hhfkdsahf</p>
      <div style="margin-top: 15px">
        <p style="margin-top: 15px;">hhfkdsahf</p>
      </div>
    </div>
  </div>
</template>

<script>
import MyPromise from '../utils/promise';

class VNode {
  constructor(nodeName, attributes, children) {
    this.nodeName = nodeName;
    this.attributes = attributes;
    this.children = children;
  }
}

function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return new VNode(nodeName, attributes, children);
}

export default {
  methods: {
  },
  mounted() {
    console.log(h('div', {style: 'width: 100px'}, [
      h('p', null, 'hello')
    ]));

    let promise = new MyPromise((resolve, reject) => {
      setTimeout(function() {
        resolve('you');
      }, 1000);
    });
    let a = promise.then((val) => {
      console.log(val);
      return 'are';
    });
    let b = a.then().then((val) => {
      console.log(val);
      return 'ok';
    });
    console.dir(promise, { depth: 10});
    console.dir(a, { depth: 10});
    console.dir(b, { depth: 10});
  }
};
</script>

<style>
/* .wrapper {
  border: 5px solid #fcc;
  display: flex
}

.center {
  background: gray;
  height: 100px;
  flex-grow: 1;
}
.left, .right {
  color: #f55;
  background: #fcc;
  width: 200px;
  height: 100px;
} */
.wrapper {
  position: relative;
  border: 5px solid #fcc;
  overflow: hidden;
}

.center {
  background: gray;
  margin: 0 210px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.left, .right {
  color: #f55;
  background: #fcc;
  width: 200px;
  height: 100px;
}
.cssmargin p, span {
  border: 2px solid red;
  margin: 10px;
  padding: 10px;
}

</style>
