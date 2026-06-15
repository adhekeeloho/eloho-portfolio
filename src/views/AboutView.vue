<script setup>
import Header from "../components/Header.vue";
import Qualification from "../components/Qualification.vue";
import Stack from "../components/Stack.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="bg-[#06060f]">
    <Header>
      <template #maincontent>
        <Qualification />
        <Stack />
      </template>
    </Header>
    <Footer />
  </div>
</template>
