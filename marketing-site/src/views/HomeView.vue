<template>
  <div>
    <Hero />
    <AdvertisementComponent />
    <ServiceShowcase />
    <InfluencerShowcase />
    <CampaignShowcase />
    <CallToAction />
    
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import ServiceShowcase from "../components/ServicesShowcase.vue";
import InfluencerShowcase from "../components/InfluencerShowcase.vue";
import CampaignShowcase from "../components/CampaignShowcase.vue";
import CallToAction from "../components/CallToAction.vue";
import AdvertisementComponent from "../components/AdvertisementComponent.vue"; // Import your advertisement component

export default {
  name: "Home",
  components: {
    Hero,
    ServiceShowcase,
    InfluencerShowcase,
    CampaignShowcase,
    CallToAction,
    AdvertisementComponent, // Register the advertisement component
  },
};
</script>

<style scoped>
/* Add any custom styles for the home page */
</style>

