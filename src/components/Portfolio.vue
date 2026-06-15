<script setup>
import { useRouter } from 'vue-router';
import braneImg   from '../assets/brane.png'
import gazelleImg from '../assets/gazelle.png'

const router = useRouter();

const featuredProjects = [
  {
    id: 1,
    title: 'Brane — Consonance Investment Managers',
    description:
      'A fintech PWA covering electricity payments, transaction management, user dashboards, and stock purchase & swap — built with Next.js and React Query.',
    tech: ['Next.js', 'TypeScript', 'React Query'],
    url: 'https://www.getbrane.co/',
    screenshot: braneImg,
    gradient: 'from-blue-900/70 via-indigo-900/50 to-[#06060f]',
    accent: '#60a5fa',
    number: '01',
  },
  {
    id: 2,
    title: 'Gazelle Application — Sterling Bank',
    description:
      'Core banking services platform at Sterling Bank, refining and extending essential financial services for thousands of users at scale.',
    tech: ['Next.js', 'Vue.js', 'TypeScript'],
    url: 'https://gazelle.ng/',
    screenshot: gazelleImg,
    gradient: 'from-teal-900/70 via-green-900/50 to-[#06060f]',
    accent: '#2dd4bf',
    number: '02',
  },
];
</script>

<template>
  <section class="section relative overflow-hidden bg-[#06060f]">
    <!-- Orbs -->
    <div class="orb w-[500px] h-[500px] bg-purple-700/10 bottom-0 -left-40"></div>

    <div class="container-max relative z-10">
      <!-- Header row -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up" data-aos-duration="700">
        <div>
          <span class="section-label">My Work</span>
          <h2 class="text-4xl lg:text-5xl font-bold font-display text-white">Selected Projects</h2>
        </div>
        <button
          @click="router.push({ name: 'portfolio' })"
          class="btn-outline self-start md:self-auto shrink-0"
        >
          View All Projects
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <!-- Project cards -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="project in featuredProjects"
          :key="project.id"
          class="glass-card overflow-hidden group"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <!-- Preview area -->
          <div :class="`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`">
            <div class="absolute inset-0 bg-grid opacity-30"></div>
            <img
              :src="project.screenshot"
              :alt="`${project.title} preview`"
              class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105"
              style="object-position: center 35%"
            />
            <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a14] to-transparent"></div>
            <span class="absolute bottom-4 right-6 text-7xl font-bold font-display text-white/5 select-none leading-none z-10">
              {{ project.number }}
            </span>
            <div class="absolute top-4 left-4 flex items-center gap-2 glass px-3 py-1.5 rounded-full z-10">
              <span class="w-1.5 h-1.5 rounded-full animate-pulse-slow" :style="`background: ${project.accent};`"></span>
              <span class="text-[11px] font-medium text-slate-300">Live</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="badge"
                :class="tech === 'Vue.js' ? 'badge-teal' : 'badge-blue'"
              >
                {{ tech }}
              </span>
            </div>
            <h3 class="text-lg font-bold font-display text-white mb-2 leading-snug">{{ project.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-5">{{ project.description }}</p>
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
              :style="`color: ${project.accent};`"
            >
              View Live Site
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
