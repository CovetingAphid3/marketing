<template>
  <section class="bg-gradient-to-br from-purple-600 via-blue-500 to-gray-900 rounded-xl shadow-lg p-12 mx-auto">
    <h2 class="text-4xl font-extrabold text-white mb-10 text-center">What Our Clients Say</h2>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
        <p class="text-gray-100 italic mb-6">"{{ testimonial.quote }}"</p>
        <div class="flex items-center">
          <div class="w-12 h-12 bg-white rounded-full mr-4 flex-shrink-0"></div>
          <div>
            <p class="text-white font-semibold">{{ testimonial.author }}</p>
            <p class="text-gray-300 text-sm">{{ testimonial.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          id: 1,
          quote: "This team completely transformed our social media strategy. Our engagement went through the roof!",
          author: "Jane Doe",
          position: "Marketing Director, TrendSetter Inc."
        },
        {
          id: 2,
          quote: "Their expertise in influencer marketing delivered incredible results for our latest campaign.",
          author: "John Smith",
          position: "CEO, Viral Ventures"
        },
        {
          id: 3,
          quote: "Professional, creative, and always on point. We saw a significant boost in brand visibility.",
          author: "Emily Johnson",
          position: "Brand Manager, MemeMakers"
        },
        {
          id: 4,
          quote: "They know exactly how to turn content into a viral sensation. Our growth has been phenomenal!",
          author: "Michael Brown",
          position: "Social Media Lead, HypeWave"
        },
        {
          id: 5,
          quote: "Their trend analysis helped us stay ahead of the competition. We couldn't be happier.",
          author: "Sarah Lee",
          position: "CMO, TrendBreakers"
        },
        {
          id: 6,
          quote: "They gave our brand a new voice and amplified our presence across all platforms.",
          author: "David Green",
          position: "Creative Director, InstaBuzz"
        },
      ],
    };
  },
};
</script>

<style scoped>
.backdrop-filter {
  backdrop-filter: blur(10px);
}
</style>

