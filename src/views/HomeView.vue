<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Title from "../components/Title.vue";
import Portfolio from "../components/Portfolio.vue";
import Reviews from "../components/Reviews.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="bg-[#06060f]">
    <Header>
      <template #maincontent>
        <Hero />
        <Title />
        <Portfolio />
        <Reviews />
      </template>
    </Header>
    <Footer />
  </div>
</template>
