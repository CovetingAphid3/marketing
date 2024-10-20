<template>
  <section
    class="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8"
  >
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4 text-white">
        Our Influencer Network
      </h2>
      <p class="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
        Connect with top content creators and expand your reach
      </p>
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="influencer in influencers"
          :key="influencer.name"
          class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700"
        >
          <img
            :src="influencer.imageUrl"
            :alt="influencer.name"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2">
              {{ influencer.name }}
            </h3>
            <p class="text-gray-300 mb-4">{{ influencer.category }}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <component
                  :is="influencer.platformIcon"
                  class="h-5 w-5 text-white"
                />
                <span class="text-gray-300">{{ influencer.followers }}</span>
              </div>
              <a
                :href="influencer.profileUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-blue-400 transition duration-300"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <a
          href="#"
          class="inline-block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-blue-400 transition duration-300 font-semibold shadow-md"
        >
          View All Influencers
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-vue-next";

export default defineComponent({
  name: "InfluencerShowcase",
  components: {
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
  },
  data() {
    return {
      influencers: [
        {
          name: "Generic Influencer 1",
          category: "Lifestyle",
          imageUrl:
            "https://cdn.pixabay.com/photo/2022/01/23/08/27/fashion-model-6960097_640.jpg",
          followers: "1.5M followers",
          platformIcon: InstagramIcon,
          profileUrl: "#",
        },
        {
          name: "Generic Influencer 2",
          category: "Fashion",
          imageUrl:
            "https://cdn.pixabay.com/photo/2022/04/24/17/18/black-man-7154113_640.jpg",
          followers: "900K followers",
          platformIcon: YoutubeIcon,
          profileUrl: "#",
        },
        {
          name: "Generic Influencer 3",
          category: "Travel",
          imageUrl:
            "https://cdn.pixabay.com/photo/2019/12/02/21/23/penguins-4668754_640.jpg",
          followers: "600K followers",
          platformIcon: InstagramIcon,
          profileUrl: "#",
        },
        {
          name: "Generic Influencer 4",
          category: "Food & Drink",
          imageUrl:
            "https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_960_720.jpg",
          followers: "1.2M followers",
          platformIcon: TwitterIcon,
          profileUrl: "#",
        },
        // Add more influencers as needed
      ],
    };
  },
});
</script>

<style scoped>
/* Custom styles (if needed) */
</style>
