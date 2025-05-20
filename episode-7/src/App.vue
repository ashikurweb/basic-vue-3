<script>
export default {
  data() {
    return {
      firstName: "Ashikur",
      lastName : "Rahman",
      company  : "Codeshaper"
    }
  }
};
</script>

<template>
  <div class="grid h-screen place-items-center">
    <div class="font-bold text-gray-800">
      <p class="text-3xl">{{ firstName }} {{ lastName }}</p>
      <p>{{ company }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
