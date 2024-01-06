<script setup>
import { ref } from "vue";

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>
<!-- Header -->
<template>
 <div class="bg-inherit do ">
    <div class="">
      <nav class="ok py-8 px-10 md:flex md:justify-between">
        <div class="flex items-center justify-between">
          <a href="#" class="md:mr-2"
            ><h1 class=" block text-transparent bg-clip-text font-bold text-2xl bg-gradient-to-r from-blue-300 via-green-300 to-purple-400 xl:inline">Dev_Eloho</h1>
          </a>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-500
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:justify-around
            md:flex-row
            md:space-x-10
            md:mt-0
          "
        >
          <ul
            class="
              flex-col flex
              justify-start
              mt-8
              space-y-4
              md:flex
              md:space-y-0
              md:flex-row
              md:items-center
              md:space-x-10
              md:mt-0
            "
          >
            <li class="text-[#1B1C20] uppercase font-semibold hover:underline decoration-teal-400 decoration-double decoration-2 underline-offset-8"><RouterLink to="/">Home</RouterLink></li>
            <li class="text-[#1B1C20] uppercase font-semibold hover:underline decoration-teal-400 decoration-double decoration-2 underline-offset-8"><RouterLink to="/about">About Me</RouterLink></li>
            <li class="text-[#1B1C20] uppercase font-semibold hover:underline decoration-teal-400 decoration-double decoration-2 underline-offset-8"><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <!-- <li class="text-[#1B1C20] uppercase font-semibold hover:underline decoration-teal-400 decoration-double decoration-2 underline-offset-8"><RouterLink to="/contact">Contact Me</RouterLink></li> -->
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <div class="bg-white do"><slot name="maincontent"> </slot></div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,500&display=swap");


.do {
  font-family: "DM Sans", sans-serif;
}



</style>