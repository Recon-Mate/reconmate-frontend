<template>
  <div class="min-h-screen bg-gray-100 font-Lexend snap-y snap-mandatory overflow-scroll">
    <AppNavbar />
    <section id="home" class="snap-start">
      <HomeView />
    </section>
    <section id="about" class="snap-start">
      <AboutView />
    </section>
    <section id="faq" class="snap-start">
      <FAQView />
    </section>
    <section id="team" class="snap-start">
      <TeamView />
    </section>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';
import HomeView from './HomeView.vue';
import AboutView from './AboutView.vue';
import FAQView from './FAQView.vue';
import TeamView from './TeamView.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'LandingPage',
  components: {
    AppNavbar,
    HomeView,
    AboutView,
    FAQView,
    TeamView,
    AppFooter,
  },
};
</script>

<style>
section {
  height: 100vh; /* Set each section to full viewport height */
  overflow-y: auto; /* Enable vertical scrolling if content exceeds height */
}
</style>
