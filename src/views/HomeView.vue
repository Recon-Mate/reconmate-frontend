<template>
  <section id="home" font-Outfit class="snap-start section-with-smooth-scroll">
    <div class="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-20">
      <!-- Text Section -->
      <div class="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">
          <span class="typewriter">
            Halo, Welcome to Recon Mate
          </span>
        </h2>
        <h1 class="text-3xl md:text-4xl lg:text-4xl font-bold text-blue-900 leading-tight">
          Temukan Ribuan Tulisan Ethical Hacking di Ujung Jari Anda
        </h1>
        <p class="text-base md:text-lg lg:text-xl text-gray-600">
          Recon Mate adalah platform pencarian tulisan ethical hacking yang mencakup bug bounty, responsible disclosure, dan pentest writeups. Kami hadir untuk membantu Anda meningkatkan keterampilan peretasan dengan mempermudah akses ke berbagai tulisan kerentanan yang ditemukan oleh para peretas pada target yang berbeda.
        </p>
        <a href="#" class="inline-flex items-center bg-blue-900 text-white text-sm md:text-base lg:text-lg px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded hover:bg-blue-700 transition duration-300">
          <i class="fa fa-book mr-2"></i> Temukan
        </a>
      </div>

      <!-- Image Section -->
      <div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src="../assets/Recon.png" alt="Bug" class="w-2/3 md:w-3/4 lg:w-1/2 transition-transform duration-300 hover:scale-105">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.section-with-smooth-scroll {
  scroll-behavior: smooth;
}

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

.text-lg, .text-xl, .text-2xl, .text-3xl, .text-4xl, .text-5xl {
  transition: color 0.3s ease-in-out;
}

.text-lg:hover, .text-xl:hover, .text-2xl:hover, .text-3xl:hover, .text-4xl:hover, .text-5xl:hover {
  color: inherit; /* Remove the color change on hover */
}

.hover\\:scale-105:hover {
  transform: scale(1.05);
}

.hover\\:bg-blue-700:hover {
  background-color: #1e40af;
}

/* Typewriter effect */
.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 4s steps(40, end) infinite;
}

@keyframes typing {
  0% { width: 0; }
  100% { width: 100%; }
}
</style>
