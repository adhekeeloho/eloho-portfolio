<template>
  <Header>
    <template #maincontent> 
      <Details/>
      <Reviews/>
    </template>
   </Header>
   <Footer/>
</template>

<script setup>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Reviews from "../components/Reviews.vue";
import Details from "../components/Details.vue";
</script>

<style>

</style>