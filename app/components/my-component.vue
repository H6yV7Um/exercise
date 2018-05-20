<template>
  <div>
    <slot v-for="d in data" :item="d">
    </slot>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>

</style>
