<template>
  <section id="faq" class="snap-start section-with-smooth-scroll">
    <div class="p-8 md:p-16 lg:p-20 bg-white">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">FAQ</h2>
      <div class="mt-8">
        <div class="faq-container border border-gray-300 rounded-lg p-6 mb-4" v-for="(faq, index) in faqs" :key="index">
          <div class="question-container cursor-pointer flex justify-between items-center" @click="toggleQuestion(index)">
            <h3 class="text-lg md:text-xl lg:text-2xl font-medium">{{ faq.question }}</h3>
            <i :class="{'fas fa-chevron-down': activeQuestion !== index, 'fas fa-chevron-up': activeQuestion === index}"></i>
          </div>
          <transition name="fade">
            <div class="answer-container mt-4" v-if="activeQuestion === index">
              <p class="text-base md:text-lg lg:text-xl text-gray-600">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQView',
  data() {
    return {
      activeQuestion: null,
      faqs: [
        {
          question: 'Apa itu Recon Mate?',
          answer: 'Recon Mate adalah situs web pencarian tulisan ethical hacking termasuk bug bounty, responsible disclosure, dan pentest writeups. Tujuan website ini dibuat supaya dapat membantu meningkatkan keterampilan peretasan Anda dengan mempelajari ribuan tulisan kerentanan yang ditemukan peretas pada target yang berbeda.'
        },
        {
          question: 'Bagaimana cara menggunakan Recon Mate?',
          answer: 'Anda dapat mencari tulisan-tulisan berdasarkan kategori seperti bug bounty, responsible disclosure, dan pentest writeups. Platform ini juga menyediakan fitur interaktif seperti umpan balik pengguna, penandaan tulisan favorit, dan berbagi informasi dengan sesama pengguna.'
        },
        {
          question: 'Apakah Recon Mate gratis digunakan?',
          answer: 'Ya, Recon Mate dapat digunakan secara gratis. Kami berkomitmen untuk menyediakan sumber daya yang berguna dan aman untuk komunitas peretas etis.'
        },
        {
          question: 'Bagaimana cara kami menjaga keamanan data?',
          answer: 'Kami menerapkan praktik keamanan data yang ketat untuk melindungi informasi pengguna dan konten yang disimpan di platform kami.'
        }
      ]
    };
  },
  methods: {
    toggleQuestion(index) {
      this.activeQuestion = this.activeQuestion === index ? null : index;
    }
  }
};
</script>

<style>
.section-with-smooth-scroll {
  scroll-behavior: smooth;
}

.text-lg, .text-xl, .text-2xl, .text-3xl, .text-4xl, .text-5xl {
  transition: color 0.3s ease-in-out;
}

.text-lg:hover, .text-xl:hover, .text-2xl:hover, .text-3xl:hover, .text-4xl:hover, .text-5xl:hover {
  color: #ff9900;
}

.faq-container {
  transition: all 0.3s ease-in-out;
}

.question-container {
  cursor: pointer;
}

.answer-container {
  margin-top: 16px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
