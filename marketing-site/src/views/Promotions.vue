<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CallToAction from '../components/CallToAction.vue'

gsap.registerPlugin(ScrollTrigger);

interface Promotion {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  savings: string;
  duration: string;
  ctaText: string;
}

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Viral Kickstarter",
    description: "Perfect for brands looking to make a splash on social media",
    features: [
      "1 Viral Content Creation campaign",
      "2 Influencer Mashup collaborations",
      "1 month of Trend Surfing",
      "Social Media Audit & Strategy Session"
    ],
    price: "$4,999",
    savings: "Save 20%",
    duration: "Limited time offer",
    ctaText: "Kick Off Your Viral Journey"
  },
  {
    id: 2,
    title: "Meme Madness Package",
    description: "Turn your brand into the talk of the internet",
    features: [
      "3 Custom Meme Campaigns",
      "1 Meme Contest for User Engagement",
      "Meme Trend Analysis Report",
      "2 weeks of Real-time Meme Adaptation"
    ],
    price: "$3,499",
    savings: "Save 15%",
    duration: "This month only",
    ctaText: "Start the Meme Magic"
  },
  {
    id: 3,
    title: "Influencer Takeover Bonanza",
    description: "Let the stars align for your brand's social presence",
    features: [
      "3 Influencer Account Takeovers",
      "Content Strategy for Each Takeover",
      "Performance Analytics & Reporting",
      "1 Surprise Micro-Influencer Bonus Takeover"
    ],
    price: "$5,999",
    savings: "Save 25%",
    duration: "Next 30 days",
    ctaText: "Unleash the Influencers"
  },
  {
    id: 4,
    title: "TrendSetter Pro",
    description: "Stay ahead of the curve and dominate social conversations",
    features: [
      "2 months of Trend Surfing",
      "Weekly Trend Forecast Reports",
      "2 Rapid Response Campaigns",
      "1 Viral Hashtag Strategy Session"
    ],
    price: "$4,499",
    savings: "Save 18%",
    duration: "Seasonal offer",
    ctaText: "Ride the Trend Wave"
  }
];

const activePromotionId = ref<number | null>(null);

const togglePromotion = (id: number) => {
  activePromotionId.value = activePromotionId.value === id ? null : id;
};

onMounted(() => {
  promotions.forEach((promo) => {
    gsap.from(`#promo-${promo.id}`, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: `#promo-${promo.id}`,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });
  });
});
</script>

<template>
  <div class="bg-gradient-to-br from-gray-900 to-black  min-h-screen py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl font-extrabold text-white text-center mb-8">Hot Deals & Promos</h1>
      <p class="text-xl text-white text-center mb-16">Ignite your social media presence with our limited-time offers!</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="promo in promotions" :key="promo.id" :id="`promo-${promo.id}`"
             class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-white mb-2">{{ promo.title }}</h2>
            <p class="text-white mb-4">{{ promo.description }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-3xl font-bold text-white">{{ promo.price }}</span>
              <span class="text-lg font-semibold text-green-400">{{ promo.savings }}</span>
            </div>
            <p class="text-sm text-gray-300 mb-4">{{ promo.duration }}</p>
            <button @click="togglePromotion(promo.id)"
                    class="w-full bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300 mb-4">
              {{ activePromotionId === promo.id ? 'Hide Details' : 'See What\'s Included' }}
            </button>
            <div v-if="activePromotionId === promo.id" class="mt-4">
              <h3 class="text-lg font-semibold text-white mb-2">What's Included:</h3>
              <ul class="list-disc list-inside text-white space-y-2 mb-4">
                <li v-for="feature in promo.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
            <a href="#contact" class="block w-full text-center bg-white text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              {{ promo.ctaText }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Don't See What You're Looking For?</h2>
        <p class="text-xl text-gray-200 mb-8">We offer custom packages tailored to your brand's unique needs.</p>
        <a href="#contact" class="inline-block bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">
          Get a Custom Quote
        </a>
      </div>
    </div>
  </div>
    <div>
        <CallToAction />
    </div>
</template>

<style scoped>
.backdrop-filter {
  backdrop-filter: blur(10px);
}
</style>

