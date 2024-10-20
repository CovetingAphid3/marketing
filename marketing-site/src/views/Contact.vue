<template>
  <div class="bg-gradient-to-b from-gray-900 to-black  min-h-screen py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-5xl font-extrabold text-white text-center mb-8">Get in Touch</h1>
      <p class="text-xl text-white text-center mb-12">We'd love to hear from you! Fill out the form below or reach out through our social media.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Form Section -->
        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6">
          <h2 class="text-3xl font-semibold text-yellow-300 mb-6">Contact Us</h2>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-sm text-gray-300">Name</label>
              <input v-model="formData.name" type="text" id="name" required
                     class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"/>
            </div>
            <div>
              <label for="email" class="block text-sm text-gray-300">Email</label>
              <input v-model="formData.email" type="email" id="email" required
                     class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"/>
            </div>
            <div>
              <label for="message" class="block text-sm text-gray-300">Message</label>
              <textarea v-model="formData.message" id="message" rows="4" required
                        class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300">
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information Section -->
        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6">
          <h2 class="text-3xl font-semibold text-yellow-300 mb-6">Our Info</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold text-white">Address</h3>
              <p class="text-gray-300">123 Marketing Ave, Suite 100<br>City, State, 12345</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Phone</h3>
              <p class="text-gray-300">(123) 456-7890</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Email</h3>
              <p class="text-gray-300">contact@yourcompany.com</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-300 hover:text-white transition duration-300">Facebook</a>
                <a href="#" class="text-gray-300 hover:text-white transition duration-300">Twitter</a>
                <a href="#" class="text-gray-300 hover:text-white transition duration-300">Instagram</a>
                <a href="#" class="text-gray-300 hover:text-white transition duration-300">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-semibold text-white mb-4 text-center">Find Us Here</h2>
        <div class="w-full h-64 rounded-xl overflow-hidden shadow-lg">
          <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094243!2d144.95373531531544!3d-37.81627997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0629b9%3A0xd2be81cd02f90331!2sYour%20Company!5e0!3m2!1sen!2sau!4v1615435266047!5m2!1sen!2sau" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  // Add your form submission logic here
  console.log(formData.value);
  alert('Message sent successfully!');
  // Reset form after submission
  formData.value = { name: '', email: '', message: '' };
};
</script>

<style scoped>
.backdrop-filter {
  backdrop-filter: blur(10px);
}
</style>

