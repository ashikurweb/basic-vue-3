<script>
export default {
  data() {
    return {
      msg: 'Hello World!',
      headingColor: 'is-demo',
      isPromoted: true
    }
  }
}
</script>

<template>
  <h1 v-bind:class="headingColor">{{ msg }}</h1>
  <h2 :class="isPromoted ? 'text-amber-500 italic text-3xl hover:text-5xl' : 'text-green-500 text-3xl'">Promoted Movie</h2>
</template>

<style scoped>
.is-demo {
  color: red;
  font-size: 4rem;
}

</style>