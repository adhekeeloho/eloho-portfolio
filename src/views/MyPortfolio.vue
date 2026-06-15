<script setup>
import Header from "../components/Header.vue";
import Details from "../components/Details.vue";
import Reviews from "../components/Reviews.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="bg-[#06060f]">
    <Header>
      <template #maincontent>
        <Details />
        <Reviews />
      </template>
    </Header>
    <Footer />
  </div>
</template>
