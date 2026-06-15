<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showMenu = ref(false);
const scrolled = ref(false);

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const toggleNav = () => (showMenu.value = !showMenu.value);
const closeMenu = () => (showMenu.value = false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 30;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <div>
    <!-- ── Top nav bar ── -->
    <nav
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass !border-0 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-6',
      ]"
    >
      <div class="container-max flex items-center justify-between">
        <!-- Brand -->
        <RouterLink
          to="/"
          @click="closeMenu"
          class="gradient-text text-xl font-bold font-display tracking-tight relative z-[70]"
        >
          Dev_Eloho
        </RouterLink>

        <!-- Desktop links -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group py-1"
              active-class="!text-white"
            >
              {{ link.label }}
              <span class="absolute -bottom-0.5 left-0 w-0 h-[2px] rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </RouterLink>
          </li>
        </ul>

        <!-- Desktop Hire Me → contact page -->
        <RouterLink to="/contact" class="hidden md:inline-flex btn-primary py-2.5 px-5 text-sm">
          Hire Me
        </RouterLink>

        <!-- Hamburger (mobile) -->
        <button
          @click="toggleNav"
          class="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 relative z-[70]"
          aria-label="Toggle menu"
        >
          <span :class="['block w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-center', showMenu ? 'rotate-45 translate-y-[7px]' : '']"></span>
          <span :class="['block w-full h-[2px] bg-white rounded-full transition-all duration-300', showMenu ? 'opacity-0 scale-x-0' : '']"></span>
          <span :class="['block w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-center', showMenu ? '-rotate-45 -translate-y-[7px]' : '']"></span>
        </button>
      </div>
    </nav>

    <!-- ── Mobile full-screen overlay ── -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="showMenu"
        class="md:hidden fixed inset-0 z-[60] flex flex-col"
        style="background: rgba(6,6,15,0.97); backdrop-filter: blur(24px);"
      >
        <div class="pt-24 px-6 flex flex-col h-full pb-10">

          <!-- Nav links -->
          <nav class="flex flex-col gap-1 flex-1">
            <RouterLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              @click="closeMenu"
              class="text-2xl font-bold font-display text-slate-400 hover:text-white py-5 border-b border-white/[0.06] transition-colors duration-200 flex items-center justify-between group"
              active-class="gradient-text"
            >
              {{ link.label }}
              <svg class="w-5 h-5 text-slate-700 group-hover:text-teal-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </RouterLink>
          </nav>

          <!-- Bottom CTA -->
          <div class="mt-8 space-y-4">
            <RouterLink
              to="/contact"
              @click="closeMenu"
              class="btn-primary w-full justify-center py-4 text-base"
            >
              Hire Me
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </RouterLink>

            <!-- Social row -->
            <div class="flex items-center justify-center gap-3 pt-2">
              <a href="https://github.com/adhekeeloho" target="_blank" rel="noopener" class="glass p-3 rounded-xl text-slate-500 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/eloho-joy-adheke-569666234" target="_blank" rel="noopener" class="glass p-3 rounded-xl text-slate-500 hover:text-blue-400 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/dev_eloho/" target="_blank" rel="noopener" class="glass p-3 rounded-xl text-slate-500 hover:text-pink-400 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </Transition>

    <!-- Spacer -->
    <div class="h-20 md:h-24"></div>

    <slot name="maincontent"></slot>
  </div>
</template>
