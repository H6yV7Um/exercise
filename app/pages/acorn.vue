<template>
  <div>
    <p>fdsfsad</p>
    <div style="float: left; width: 100px">23</div>
    <div style="float: right; width: 100px">32</div>
    <div style="overflow:hidden">
      <div style="border: 1px solid red; float: left;">fdsaa3afdsaf</div>
      <div style="border: 1px solid black;"> stfdsafda</div>
    </div>
    <div style="overflow:hidden">
      <ul>
        <li style="display: inline-block">
          fdsa
          <p>,fdsfa</p>
        </li>
        <li style="display: inline-block" @click="sendSocket">fdsa</li>
        <li style="display: inline-block">fdsa</li>
        <li style="display: inline-block">fdsa</li>
        <li style="display: inline-block">fdsa</li>
      </ul>
    </div>
    <my-component :data="data">
      <div slot-scope="props">
        fuck
        {{ props.item.name }}
      </div>
    </my-component>

    <div class="container">
      <iframe src="http://minos-web.test.elenet.me:8888/#/waybill/list" width="100%" height="400px"></iframe>
    </div>
  </div>
</template>

<script>
import * as acorn from 'acorn';
import * as walk from 'acorn/dist/walk';
// import { throttle } from '../utils/base';
import MyComponent from '../components/my-component';

// let comments = [];
// console.log(acorn.parse('let aa =32; // a number \n if (true) {import MyPromise from "../utils/promise" }; let a = 32; const fn = () => { setTimout(function () { let cc = 1;}, 1000); console.log(a); }; function b() { fn(); }', { ecmaVersion: 6, sourceType: 'module', allowImportExportEverywhere: true, onComment: comments}));
// console.log(acorn.getLineInfo('let a = 2; \n let b = 32;', 14));
// console.log(comments);

// console.log([...acorn.tokenizer('let a = 2; // a number \n let b = 32; function dd() {console.log(a)}', { locations: true, ranges: true })]);

// walk.simple(acorn.parse('let x = 10; function a() { console.log(x); }'), {
//   Literal(node) {
//     console.log(node);
//     console.log(`Found a literal: ${ node.value }`);
//   },
//   FunctionDeclaration(node) {
//     console.log(node);
//   },
//   MemberExpression(node) {
//     console.log(node);
//   }
// });

walk.ancestor(acorn.parse('let a = 23; foo("hi")'), {
  Literal(_, ancestors) {
    console.log(_);
    ancestors.forEach(item => console.log(item));
  }
});

// setInterval(throttle(function() {
//   console.log(new Date().getTime(), a);
// }, 3000), 1000);

export default {
  components: {MyComponent},
  data() {
    return {
      data: [{
        name: 'fff',
        socket: null
      }]
    };
  },
  methods: {
    sendSocket(evt) {
      this.socket.send(evt.target.innerHTML);
    }
  },
  mounted() {
    var socket = new WebSocket('ws://localhost:1337');
    this.socket = socket;
    // WebSocket 连接打开的时候，打印出 WebSocket 已连接的信息
    socket.onopen = function(event) {
      console.log('WebSocket is connected.');
      socket.send('some message');
    };
  }
};
</script>

<style lang="scss">
ul {
  li {
    float: left;
  }
}

$base-font-size: 16 !default;

@mixin emCalc($props, $sizes, $base: $base-font-size) {
  $values: ();
  $sublists: false;

  @each $s in $sizes {
    @if type-of($s) == list {
      $sublists: true;
      $vv: ();
      @each $ss in $s {
        $vv: append($vv, if(type-of($ss) == number, #{ $ss / $base }em, $ss))
      }
    }
    @else {
      $values: append($values, if(type-of($s) == number, #{$s / $base}em, $s));
    }
  }
  $value: join((), $values, if($sublists, comma, space));
  @each $prop in $props {#{$prop}: $value}
}

@function strip-units($number) {
  @return $number / ( $number * 0 + 1)
}

body {
  @include emCalc(font-size, 18);
}

</style>
