<template>
  <section
    class="bg-gradient-to-b from-gray-600 to-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
  >
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div class="container mx-auto relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-5xl font-bold text-white mb-6">
          Ready to
          <span class="text-yellow-300">{{ phrases[currentPhrase] }}</span
          >?
        </h2>
        <p class="text-xl text-blue-100 mb-10">
          Join the ranks of successful brands that have skyrocketed their online
          presence with our team. Let's create your next viral campaign
          together!
        </p>
        <div class="flex flex-wrap justify-center gap-6 mb-12">
          <div class="flex flex-col items-center">
            <i class="fas fa-bolt w-12 h-12 text-yellow-300 mb-2"></i>
            <span class="text-white">Rapid Growth</span>
          </div>
          <div class="flex flex-col items-center">
            <i class="fas fa-chart-line w-12 h-12 text-green-400 mb-2"></i>
            <span class="text-white">Increased Engagement</span>
          </div>
          <div class="flex flex-col items-center">
            <i class="fas fa-users w-12 h-12 text-pink-400 mb-2"></i>
            <span class="text-white">Wider Reach</span>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="/contact"
            class="inline-block bg-white text-blue-700 px-8 py-4 rounded-full hover:bg-yellow-300 hover:text-blue-800 transition duration-300 font-semibold shadow-lg text-lg"
          >
            Get Started
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
          <a
            href="/portfolio"
            class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-700 transition duration-300 font-semibold text-lg"
          >
            View Our Portfolio
          </a>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent opacity-40"
    ></div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CallToAction",
  data() {
    return {
      currentPhrase: 0,
      phrases: ["Elevate ", "Go Viral", "Engage ", "Dominate "],
    };
  },
  created() {
    setInterval(() => {
      this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
    }, 3000);
  },
});
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
