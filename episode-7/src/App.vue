<script>
export default {
  data() {
    return {
      firstName: "Ashikur",
      lastName : "Rahman",
      company  : "Codeshaper",
      position : "<h1>Junior Software Engineer</h1>",
      button   : `<a href="#" onclick="alert('You have clicked!')" class="bg-blue-500 px-4 py-2 rounded text-white">Button</a>`,
      headingId: 'heading',
      textColor: 'purple'
    }
  }
};
</script>

<template>
  <div class="grid h-screen place-items-center">
    <div class="font-bold text-center text-gray-800">
      <p class="text-3xl">{{ firstName }} {{ lastName }}</p>
      <p v-text="company"></p>
      <p v-html="position" class="mt-2"></p>
      <p v-html="button" class="mt-2"></p>
      <h1 v-bind:id="headingId" class="mt-2">My Heading</h1>
      <h1 :class="textColor">My Heading</h1>
    </div>
  </div>
</template>

<style scoped>
  .purple {
    color: #9F7AEA;
  }
</style>
