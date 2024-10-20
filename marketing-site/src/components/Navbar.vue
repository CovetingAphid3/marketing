<template>
  <nav
    class="bg-gradient-to-r from-gray-900 to-black text-white sticky top-0 z-50 shadow-lg"
  >
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo and Title Section -->
      <div class="flex items-center space-x-4">
        <img
          src="/assets/logo.jpg"
          alt="Dala U Crew Logo"
          class="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-blue-500"
        />
        <a
          href="#"
          class="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300"
        >
          Dala U Crew
        </a>
      </div>
      <!-- Navigation Links -->
      <ul class="hidden lg:flex space-x-8">
        <li v-for="item in navItems" :key="item.name">
          <RouterLink
            :to="item.to"
            :class="[
              item.current ? 'text-blue-500' : 'hover:text-blue-500',
              'transition duration-300 text-lg font-medium',
            ]"
            >{{ item.name }}</RouterLink
          >
        </li>
      </ul>
      <!-- Action Buttons -->
      <div class="hidden lg:flex space-x-4">
        <RouterLink
          :to="'/submit-content'"
          class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-400 transition duration-300 font-semibold shadow-md"
        >
          Submit Content
        </RouterLink>
        <RouterLink
          :to="'/join-us'"
          class="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-black transition duration-300 font-semibold"
        >
          Join Us
        </RouterLink>
      </div>
      <!-- Mobile Menu Toggle -->
      <div class="lg:hidden">
        <button
          @click="toggleMenu"
          class="focus:outline-none text-blue-500 hover:text-blue-400 transition-colors duration-300"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute inset-0 bg-gradient-to-r from-gray-900 to-black z-50 h-screen"
      >
        <div class="container mx-auto px-4 py-6">
          <ul class="space-y-4">
            <li v-for="item in navItems" :key="item.name">
              <RouterLink
                :to="item.to"
                :class="[
                  item.current
                    ? 'text-blue-500'
                    : 'text-white hover:text-blue-500',
                  'block text-lg font-medium transition duration-300',
                ]"
                @click="closeMenu"
                >{{ item.name }}</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="'/submit-content'"
                class="block bg-blue-500 text-black px-4 py-2 mt-4 rounded-full text-center font-semibold hover:bg-blue-400 transition duration-300"
                @click="closeMenu"
              >
                Submit Content
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="'/join-us'"
                class="block bg-transparent border-2 border-blue-500 text-blue-500 px-4 py-2 mt-2 rounded-full text-center font-semibold hover:bg-blue-500 hover:text-black transition duration-300"
                @click="closeMenu"
              >
                Join Us
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

export default {
  name: "Navbar",
  components: {
    RouterLink,
  },
  setup() {
    const route = useRoute();
    const isMenuOpen = ref(false);

    const navItems = computed(() => [
      { name: "Home", to: "/", current: route.path === "/" },
      {
        name: "Services",
        to: "/services",
        current: route.path === "/services",
      },
      {
        name: "Promotions",
        to: "/promotions",
        current: route.path === "/promotions",
      },
      { name: "Contact", to: "/contact", current: route.path === "/contact" },
      { name: "About", to: "/about", current: route.path === "/about" },
    ]);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return { navItems, isMenuOpen, toggleMenu, closeMenu };
  },
};
</script>

<style scoped>
@media (max-width: 1023px) {
  .container {
    max-width: 100%;
  }
}
</style>
