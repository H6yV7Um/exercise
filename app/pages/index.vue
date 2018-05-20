<template>
  <div>
    <p class="counter"></p>
    <div class="wrapper">
      <div class="left">f d d</div>
      <div class="right">fdsaf</div>
      <div class="center">fdsaf</div>
    </div>
    <!-- <div class="cssmargin">
      <span>hhfkdsahf</span>
      <span>hhfkdsahf</span>
      <p>hhfkdsahf</p>
      <div style="margin-top: 15px">
        <p style="margin-top: 15px;">hhfkdsahf</p>
      </div>
    </div> -->
    <br/>
    <div class="container">
      <div class="middle"><div class="inner">fdsaf</div></div>
      <div class="left1">f d d</div>
      <div class="right1">fdsaf</div>
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

    let promise = new MyPromise((resolve) => {
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
.left1,
.middle,
.right1 {
  position: relative;
  float: left;
  min-height: 130px;
}
.container{
  padding:0 220px 0 200px;
  overflow: hidden;
}
.left1 {
  margin-left: -100%;
  left: -200px;
  width: 200px;
  background: red;
}
.right1 {
  margin-left: -220px;
  right: -220px;
  width: 220px;
  background: green;
}
.middle {
  width: 100%;
  background: blue;
  word-break: break-all;
}
.inner {
  margin: 0 220px;
}
.cssmargin p, span {
  border: 2px solid red;
  margin: 10px;
  padding: 10px;
}
ul {
  font-size: 0;
}
ul li {
  display: inline-block;
  border: 1px solid black;
}

.counter {
  counter-reset: showjoy 1;
  counter-increment: showjoy;
}
.counter:before {
  content: counter(showjoy);
  counter-increment: showjoy;
}
.counter::after {
  content: counter(showjoy);
  counter-increment: showjoy;
}
</style>
