<template>
  <section class="bg-white shadow-lg rounded-xl p-8 mt-8 mx-auto flex items-center space-x-6">
    <div class="w-1/3">
      <img :src="company.logo" :alt="company.name + ' logo'" class="w-full h-auto rounded-md shadow-sm" />
    </div>
    <div class="flex-1">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ company.name }}</h3>
      <p class="text-gray-600 mb-6">{{ company.description }}</p>
      <a :href="company.link" target="_blank" class="bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
        {{ company.ctaText }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdvertisementComponent",
  data() {
    return {
      company: {
        name: "Company Name",
        logo: "https://cdn.pixabay.com/photo/2023/02/01/00/54/company-7759278_1280.png", 
        description: "This is an example of where you can place the cuurent business you are promoting",
        link: "https://www.example.com",
        ctaText: "Learn More"
      },
    };
  },
};
</script>

<style scoped>
/* Add custom styles for the advertisement component */
</style>

