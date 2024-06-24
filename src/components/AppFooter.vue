<template>
  <footer class="bg-white text-gray-900 py-8 shadow-md">
    <div class="container mx-auto px-4">
      <div class="content-footer flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <!-- Logo Section -->
        <div class="logo-footer box-footer mb-6 lg:mb-0">
          <img src="@/assets/logo.png" alt="logo" class="logo w-32 h-auto" loading="eager" />
        </div>

        <!-- Main Navigation Links -->
        <div class="navigation-links flex flex-wrap justify-center lg:justify-start">
          <div class="nav-section box-footer mb-6 lg:mb-0">
            <h4 class="text-lg font-semibold mb-2">Navigasi</h4>
            <ul class="text-sm md:text-base text-gray-600 space-y-1">
              <li><a class="serviceLink" href="#about">About</a></li>
              <li><a class="serviceLink" href="#faq">FAQ</a></li>
              <li><a class="serviceLink" href="#team">Team</a></li>
            </ul>
          </div>

          <!-- Help Center Links -->
          <div class="help-center box-footer">
            <h4 class="text-lg font-semibold mb-2">Pusat Bantuan</h4>
            <ul class="text-sm md:text-base text-gray-600 space-y-1">
              <li><a class="helpCenter" href="#">Ibnu Fachrizal</a></li>
              <li><a class="helpCenter" href="#">Agus Arifudin</a></li>
              <li><a class="helpCenter" href="#">Faishal Ananta Ridha</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="container mx-auto px-4">
      <div class="copyright text-center text-gray-500 text-sm mt-6">
        <p>Copyright © 2024: Created & Designed with <span class="love text-red-500">♥</span> by Capstone Team.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
footer {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.content-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 1024px) {
  .content-footer {
    flex-direction: row;
  }
}

.logo-footer {
  text-align: center;
  margin-bottom: 1rem;
}

.logo {
  width: 150px; /* Adjust the size of the logo as needed */
  height: auto;
}

.navigation-links {
  margin-top: 1.5rem;
  text-align: center;
  justify-content: space-around;
  flex: 1;
}

.nav-section {
  flex: 1;
  margin-bottom: 1rem;
  text-align: center;
}

.help-center {
  flex: 1;
  margin-bottom: 1rem;
  text-align: center;
}

@media (min-width: 1024px) {
  .nav-section {
    margin-bottom: 0;
    text-align: left;
  }

  .help-center {
    margin-bottom: 0;
    text-align: right;
  }
}

.box-footer {
  flex: 1;
  margin-bottom: 1rem;
  text-align: center;
}

@media (min-width: 1024px) {
  .box-footer {
    margin-bottom: 0;
    text-align: left;
  }
}

h4 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #333;
  text-decoration: none;
  margin-bottom: 0.5rem;
  display: block;
}

a:hover {
  color: #007bff;
}

.copyright {
  margin-top: 2rem;
  color: #777;
}
</style>
