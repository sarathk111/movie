<template>
  <div class="hello mb-5">
    <h1>&#128525; {{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style scoped>
h1 {
  font-size: 16px;
  color: #0d6efd;
  font-weight: bold;
}
</style>
