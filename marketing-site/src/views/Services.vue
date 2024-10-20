<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CallToAction from '../components/CallToAction.vue'
gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    result: string;
  };
}

const services: Service[] = [
  {
    id: 1,
    title: 'Viral Content Creation',
    description: 'We craft scroll-stopping, share-worthy content that gets people talking and brands trending.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    details: [
      'Trend analysis and forecasting',
      'Platform-specific content optimization',
      'Memetic content creation',
      'Interactive and participatory campaigns',
      'Cross-platform content strategy'
    ],
    caseStudy: {
      client: 'SneakerHype',
      challenge: 'Launch a new limited edition sneaker line with maximum buzz',
      solution: 'Created a series of "spot the difference" memes featuring celebrities wearing the sneakers, sparking a viral challenge',
      result: 'Over 2 million user-generated content pieces, 500% increase in social media followers, sold out inventory in 2 hours'
    }
  },
  {
    id: 2,
    title: 'Influencer Mashups',
    description: 'We connect your brand with unexpected influencer collaborations for maximum impact.',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
    details: [
      'Niche influencer identification',
      'Cross-industry collaborations',
      'Co-created content strategies',
      'Influencer-brand value alignment',
      'Performance tracking and optimization'
    ],
    caseStudy: {
      client: 'EcoEats',
      challenge: 'Increase brand awareness among younger demographics for a sustainable food brand',
      solution: 'Paired a well-known gaming influencer with a celebrity chef for a Gamers Gourmet Challenge series',
      result: '10 million views across platforms, 300% increase in Gen Z customer base, featured on national morning shows'
    }
  },
  {
    id: 3,
    title: 'Meme Marketing',
    description: 'We speak the language of the internet, turning your brand into the next big meme.',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    details: [
      'Real-time meme creation and adaptation',
      'Brand-safe humor development',
      'Meme template creation for brand assets',
      'Community engagement through meme contests',
      'Meme trend analysis and forecasting'
    ],
    caseStudy: {
      client: 'QuickLoan',
      challenge: 'Make financial services appealing and relatable to millennials',
      solution: 'Launched a "Bad Financial Advice" meme series that humorously highlighted the need for proper financial planning',
      result: '1 million shares in a week, 45% increase in loan applications from millennials, featured in multiple financial news outlets'
    }
  },
  {
    id: 4,
    title: 'Social Media Takeovers',
    description: 'We hijack your social accounts (with permission!) for unforgettable brand experiences.',
    icon: 'M13 17l5-5-5-5M6 17l5-5-5-5',
    details: [
      'Celebrity and influencer account takeovers',
      'Behind-the-scenes content creation',
      'Live event coverage and interaction',
      'Cross-platform storytelling',
      'Audience growth and engagement strategies'
    ],
    caseStudy: {
      client: 'GlobeTravel',
      challenge: 'Revitalize interest in international travel post-pandemic',
      solution: 'Orchestrated a week-long "Mystery Destination" takeover with a travel influencer, letting the audience guide the journey',
      result: '500,000 new followers, 200% increase in travel package inquiries, partnership requests from 50+ tourism boards'
    }
  },
  {
    id: 5,
    title: 'Trend Surfing',
    description: 'We ride the waves of trending topics, positioning your brand at the forefront of conversations.',
    icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z',
    details: [
      'Real-time trend monitoring and analysis',
      'Rapid response content creation',
      'Brand voice adaptation for trending topics',
      'Trending hashtag strategy development',
      'Crisis management and opportunity identification'
    ],
    caseStudy: {
      client: 'FitFuel',
      challenge: 'Stand out in the saturated fitness supplement market',
      solution: 'Capitalized on the viral "It is Corn!" trend by creating a limited edition "Cornfused Protein" flavor with meme-inspired packaging',
      result: 'Sold out 50,000 units in 24 hours, 1 million TikTok video creations, featured on popular comedy shows'
    }
  }
];

const activeServiceId = ref<number | null>(null);

const toggleService = (id: number) => {
  activeServiceId.value = activeServiceId.value === id ? null : id;
};

onMounted(() => {
  services.forEach((service) => {
    gsap.from(`#service-${service.id}`, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: `#service-${service.id}`,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });
  });
});
</script>

<template>
  <div class="bg-gradient-to-br from-gray-900 to-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl font-extrabold text-white text-center mb-16">Our Services</h1>

      <div class="space-y-12">
        <div v-for="service in services" :key="service.id" :id="`service-${service.id}`"
             class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
          <div class="p-6 cursor-pointer" @click="toggleService(service.id)">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-8 h-8 text-yellow-300 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
                </svg>
                <h2 class="text-2xl font-semibold text-white">{{ service.title }}</h2>
              </div>
              <svg class="w-6 h-6 text-white transform transition-transform" :class="{ 'rotate-180': activeServiceId === service.id }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <p class="text-gray-300 mt-2">{{ service.description }}</p>
          </div>

          <div v-if="activeServiceId === service.id" class="px-6 pb-6">
            <h3 class="text-xl font-semibold text-yellow-300 mb-4">What We Offer:</h3>
            <ul class="list-disc list-inside text-white space-y-2 mb-6">
              <li v-for="detail in service.details" :key="detail">{{ detail }}</li>
            </ul>

            <div class="bg-purple-800 bg-opacity-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-yellow-300 mb-4">Case Study: {{ service.caseStudy.client }}</h3>
              <p class="text-white mb-2"><span class="font-semibold">Challenge:</span> {{ service.caseStudy.challenge }}</p>
              <p class="text-white mb-2"><span class="font-semibold">Solution:</span> {{ service.caseStudy.solution }}</p>
              <p class="text-white"><span class="font-semibold">Result:</span> {{ service.caseStudy.result }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <a href="#contact" class="inline-block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-blue-400 transition duration-300 font-semibold shadow-md">
          Let's Create Something Viral
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
