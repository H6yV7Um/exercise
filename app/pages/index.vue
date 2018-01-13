<template>
  <div style="position: relative">
    <div style="height: 100%"></div>
  </div>
</template>

<script>
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
  mounted() {
    console.log(h('div', {style: 'width: 100px'}, [
      h('p', null, 'hello')
    ]));
  }
};
</script>

<style>

</style>
