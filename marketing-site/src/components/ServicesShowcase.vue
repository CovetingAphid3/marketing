<template>
  <section
    class="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8"
  >
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4 text-white">
        Our Services
      </h2>
      <p class="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
        Elevate your brand with our cutting-edge marketing solutions
      </p>
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700"
        >
          <div class="p-8">
            <div class="text-white mb-4 flex justify-center">
              <component :is="service.icon" class="h-12 w-12" />
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4 text-center">
              {{ service.title }}
            </h3>
            <p class="text-gray-300 text-center">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import {
  VideoCameraIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  MegaphoneIcon,
  LightBulbIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/vue/24/outline";

export default defineComponent({
  name: "ServicesShowcase",
  components: {
    VideoCameraIcon,
    PresentationChartLineIcon,
    UserGroupIcon,
    MegaphoneIcon,
    LightBulbIcon,
    ChatBubbleBottomCenterTextIcon,
  },
  data() {
    return {
      services: [
        {
          title: "Social Media Content",
          description:
            "Craft engaging, shareable content tailored for various social platforms to boost your brand's online presence.",
          icon: "VideoCameraIcon",
        },
        {
          title: "Brand Strategy",
          description:
            "Develop unique brand identities and comprehensive marketing strategies for maximum market impact.",
          icon: "PresentationChartLineIcon",
        },
        {
          title: "Influencer Collaboration",
          description:
            "Connect your brand with our extensive network of 40+ influential South African content creators.",
          icon: "UserGroupIcon",
        },
        {
          title: "Digital Advertising",
          description:
            "Create and manage highly targeted, results-driven ad campaigns across social media platforms.",
          icon: "MegaphoneIcon",
        },
        {
          title: "Creative Concepts",
          description:
            "Generate innovative ideas and concepts to make your brand stand out in the crowded digital landscape.",
          icon: "LightBulbIcon",
        },
        {
          title: "Community Management",
          description:
            "Build and nurture a loyal community around your brand through active engagement and compelling content.",
          icon: "ChatBubbleBottomCenterTextIcon",
        },
      ],
    };
  },
});
</script>

<style scoped>
/* Any additional styles can be added here if needed */
</style>
