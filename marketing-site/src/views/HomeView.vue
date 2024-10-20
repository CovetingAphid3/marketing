<template>
  <div>
    <Hero />
    <div>
      <ServiceShowcase />
    </div>

    <div>
      <InfluencerShowcase />
    </div>
    <div>
      <CampaignShowcase />
    </div>

    <div>
      <CallToAction />
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import ServiceShowcase from "../components/ServicesShowcase.vue";
import InfluencerShowcase from "../components/InfluencerShowcase.vue";
import CampaignShowcase from "../components/CampaignShowcase.vue";
import CallToAction from "../components/CallToAction.vue";

export default {
  name: "Home",
  components: {
    Hero,
    ServiceShowcase,
    InfluencerShowcase,
    CampaignShowcase,
    CallToAction,
  },
};
</script>

<style scoped>
/* Add any custom styles for the home page */
</style>
