<template>
  <nav class="flex flex-wrap justify-between items-center p-4 md:p-6 lg:p-8 bg-white shadow-md">
    <div class="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900">Recon Mate</div>
    <button @click="toggleNav" class="block md:hidden text-gray-900">
      <i class="fa fa-bars"></i>
    </button>
    <ul :class="{'hidden': !isNavOpen, 'flex': isNavOpen, 'flex-col': isNavOpen, 'items-start': isNavOpen, 'md:flex': !isNavOpen, 'md:flex-row': !isNavOpen}" class="text-lg md:text-xl space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 text-gray-900 mt-4 md:mt-0">
      <li>
        <a href="#home" class="flex items-center">
          <i class="fa fa-home"></i>
          <span class="ml-2">Home</span>
        </a>
      </li>
      <li>
        <a href="#about" class="flex items-center">
          <i class="fa fa-info-circle"></i>
          <span class="ml-2">About</span>
        </a>
      </li>
      <li>
        <a href="#faq" class="flex items-center">
          <i class="fa fa-question-circle"></i>
          <span class="ml-2">FAQ</span>
        </a>
      </li>
      <li>
        <a href="#team" class="flex items-center">
          <i class="fa fa-users"></i>
          <span class="ml-2">Team</span>
        </a>
      </li>
    </ul>
    <a href="#" class="hidden md:inline-flex items-center bg-blue-900 text-white text-sm md:text-base lg:text-lg px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded">
      <i class="fa fa-book mr-2"></i> Temukan
    </a>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isNavOpen: false // Initialize navigation state
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen; // Toggle navigation state
    }
  }
};
</script>

<style>
/* Add any additional styles here */
</style>
