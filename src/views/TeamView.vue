<template>
  <section id="team" class="snap-start section-with-smooth-scroll">
    <div class="p-8 md:p-16 lg:p-20 bg-white">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Tim Kami</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div class="flex flex-col items-center text-center team-member bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <img src="../assets/img/member1.jpg" alt="Team Member 1" class="w-32 h-32 rounded-full mb-4 shadow-md">
          <h3 class="text-lg md:text-xl font-medium mt-4">Ibnu Fachrizal</h3>
          <p class="text-base text-gray-600">Ketua</p>
          <div class="flex space-x-4 mt-4">
            <a href="#" target="_blank" class="text-gray-600 hover:text-blue-500">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/ibnufachrizal/" target="_blank" class="text-gray-600 hover:text-blue-500">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" class="text-gray-600 hover:text-blue-500">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center text-center team-member bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <img src="../assets/img/member2.jpg" alt="Team Member 2" class="w-32 h-32 rounded-full mb-4 shadow-md">
          <h3 class="text-lg md:text-xl font-medium mt-4">Agus Arifudin</h3>
          <p class="text-base text-gray-600">Anggota</p>
          <div class="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/Agus_arifudinnn" target="_blank" class="text-gray-600 hover:text-blue-500">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/Agusar" target="_blank" class="text-gray-600 hover:text-blue-500">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Yaelahgus" target="_blank" class="text-gray-600 hover:text-blue-500">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center text-center team-member bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <img src="../assets/img/member3.jpg" alt="Team Member 3" class="w-32 h-32 rounded-full mb-4 shadow-md">
          <h3 class="text-lg md:text-xl font-medium mt-4">Faishal Ananta Ridha</h3>
          <p class="text-base text-gray-600">Anggota</p>
          <div class="flex space-x-4 mt-4">
            <a href="https://instagram.com/Isallkun" target="_blank" class="text-gray-600 hover:text-blue-500">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/in/Isallkun" target="_blank" class="text-gray-600 hover:text-blue-500">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Isallkun" target="_blank" class="text-gray-600 hover:text-blue-500">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamView',
};
</script>

<style>
.section-with-smooth-scroll {
  scroll-behavior: smooth;
}


.team-member {
  transition: transform 0.3s ease-in-out;
}

.team-member:hover {
  transform: scale(1.05);
}

.text-lg, .text-xl, .text-2xl, .text-3xl, .text-4xl, .text-5xl {
  transition: color 0.3s ease-in-out;
}

.text-lg:hover, .text-xl:hover, .text-2xl:hover, .text-3xl:hover, .text-4xl:hover, .text-5xl:hover {
  color: #0077B6;
}

.social-icons a {
  margin-right: 8px;
  color: #333; /* Adjust color as needed */
  transition: color 0.3s ease-in-out;
}

.social-icons a:hover {
  color: #007bff; /* Change color on hover */
}
</style>
