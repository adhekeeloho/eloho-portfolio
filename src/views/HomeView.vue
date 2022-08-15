<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Title from "../components/Title.vue"
import Portfolio from "../components/Portfolio.vue"
import Footer from "../components/Footer.vue"
import Reviews from "../components/Reviews.vue";
</script>

<template>
  <main class="it">
   <Header>
    <template #maincontent > 
      <Hero/>
      <Title/>
      <Portfolio/>
      <Reviews/>
    </template>
   </Header>
   <Footer/>
  </main>
</template>

<style scoped>
.it{
  background: linear-gradient(
    to right, 
    #FAFAFA 0%, 
    #FAFAFA 50%, 
    #E0E0E0 50%, 
    #E0E0E0 100%
  );
  height: 100%;
  width: 100%;
}
</style>