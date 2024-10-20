<template>
  <section
    class="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8"
  >
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4 text-white">
        Our Successful Campaigns
      </h2>
      <p class="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
        Discover how we've helped brands achieve remarkable results through
        innovative marketing strategies.
      </p>
      <div class="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="campaign in campaigns"
          :key="campaign.title"
          class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105"
        >
          <img
            :src="campaign.imageUrl"
            :alt="campaign.title"
            class="w-full h-64 object-cover rounded-t-xl"
          />
          <div class="p-6">
            <h3 class="text-2xl font-semibold text-white mb-2">
              {{ campaign.title }}
            </h3>
            <p class="text-gray-300 mb-4">{{ campaign.description }}</p>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div
                v-for="(stat, index) in campaign.stats"
                :key="index"
                class="text-center bg-gray-800 rounded-lg p-4 shadow hover:bg-blue-500 transition duration-300"
              >
                <p class="text-3xl font-bold text-white">{{ stat.value }}</p>
                <p class="text-sm text-gray-400">{{ stat.label }}</p>
              </div>
            </div>
            <a
              :href="campaign.caseStudyUrl"
              class="inline-block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-blue-400 transition duration-300 font-semibold shadow-md"
            >
              View Case Study
            </a>
          </div>
        </div>
      </div>
      <div class="text-center mt-16">
        <a
          href="/campaigns"
          class="inline-block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-blue-400 transition duration-300 font-semibold shadow-md"
        >
          Explore All Campaigns
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CampaignShowcase",
  data() {
    return {
      campaigns: [
        {
          title: "Revitalizing Brand X's Social Presence",
          description:
            "We helped Brand X increase their social media engagement and follower count through a series of innovative content campaigns and influencer partnerships.",
          imageUrl: "/assets/about.jpg",
          stats: [
            { value: "500%", label: "Increase in Engagement" },
            { value: "250K", label: "New Followers" },
            { value: "2M", label: "Campaign Reach" },
            { value: "30%", label: "Sales Increase" },
          ],
          caseStudyUrl: "/case-study/brand-x",
        },
        {
          title: "Launching Product Y with Viral TikTok Challenge",
          description:
            "Our team created a TikTok challenge that went viral, significantly boosting Product Y's launch and creating a lasting buzz around the brand.",
          imageUrl:
            "https://cdn.pixabay.com/photo/2024/03/14/15/12/letter-8633261_640.png",
          stats: [
            { value: "10M+", label: "Video Views" },
            { value: "1M", label: "Challenge Participants" },
            { value: "75%", label: "Brand Awareness Increase" },
            { value: "200%", label: "ROI" },
          ],
          caseStudyUrl: "/case-study/product-y",
        },
        {
          title: "Engaging Audiences with Interactive Quizzes",
          description:
            "We designed an interactive quiz for Brand Z that captivated their audience, leading to increased website traffic and social media shares.",
          imageUrl:
            "https://cdn.pixabay.com/photo/2022/07/20/19/12/smartphone-7334778_640.jpg",
          stats: [
            { value: "150K", label: "Quiz Participants" },
            { value: "80%", label: "Completion Rate" },
            { value: "200K", label: "Website Visits" },
            { value: "40%", label: "Social Shares" },
          ],
          caseStudyUrl: "/case-study/brand-z",
        },
        // Add more campaigns as needed
      ],
    };
  },
});
</script>

<style scoped>
/* Custom styles (if needed) */
</style>
