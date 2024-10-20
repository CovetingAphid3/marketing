<template>
  <section class="bg-cover bg-center h-screen text-white" :style="{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/07/31/06/34/durban-4374447_640.jpg)' }">
    <div class="flex items-center justify-center h-full bg-black bg-opacity-50">
      <div class="text-center px-4 md:px-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Elevate Your Brand With Engaging Content
        </h1>
        <p class="text-lg md:text-2xl mb-8">
          We help you connect with your audience through creative, fun, and impactful marketing.
        </p>
        <div class="space-x-4">
          <a href="#services" class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition duration-300">
            Our Services
          </a>
          <a href="#portfolio" class="border border-white hover:bg-white hover:text-black font-semibold py-2 px-6 rounded-full transition duration-300">
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
/* Custom styles for the hero component */
</style>

