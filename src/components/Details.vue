<script setup>
import braneImg    from '../assets/brane.png'
import gazelleImg  from '../assets/gazelle.png'
import mavialoImg  from '../assets/mavialoelite.png'
import jevaImg     from '../assets/jevaarts.png'
import llcdexImg   from '../assets/llcdex.png'
import apexImg     from '../assets/Apex.png'
import movieImg    from '../assets/movie.png'
import foodImg     from '../assets/foodology.png'

const projects = [
  {
    id: 1, number: '01',
    title: 'Brane — Consonance Investment Managers',
    description: 'A fintech PWA with electricity bill payments (card, bank transfer, wallet), transaction management, user dashboard analytics, and stocks purchase & swap.',
    tech: ['Next.js', 'TypeScript', 'React Query', 'Tailwind CSS'],
    url: 'https://www.getbrane.co/',
    screenshot: braneImg,
    gradient: 'from-blue-900/80 via-indigo-900/60 to-[#06060f]',
    accent: '#60a5fa',
  },
  {
    id: 2, number: '02',
    title: 'Gazelle Application — Sterling Bank',
    description: 'Core banking services platform at Sterling Bank. Refining and extending essential financial features and stability for thousands of daily users.',
    tech: ['Next.js', 'Vue.js', 'TypeScript', 'SCSS'],
    url: 'https://gazelle.ng/',
    screenshot: gazelleImg,
    gradient: 'from-teal-900/80 via-green-900/60 to-[#06060f]',
    accent: '#2dd4bf',
  },
  {
    id: 3, number: '03',
    title: 'Mavialo Elite Brand',
    description: 'Premium brand website for Mavialo Elite. Focused on visual storytelling, performance, and a polished user experience that reflects the brand\'s identity.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    url: 'https://www.mavialoelitebrand.com/',
    screenshot: mavialoImg,
    gradient: 'from-purple-900/80 via-pink-900/50 to-[#06060f]',
    accent: '#a78bfa',
  },
  {
    id: 4, number: '04',
    title: 'Jeva Arts Gallery',
    description: 'An elegant online gallery and exhibition platform for Jeva Arts Limited — showcasing collections with an immersive, refined browsing experience.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    url: 'https://www.jevaartsgallery.com/',
    screenshot: jevaImg,
    gradient: 'from-amber-900/70 via-rose-900/50 to-[#06060f]',
    accent: '#fb923c',
  },
  {
    id: 5, number: '05',
    title: 'LLCDEX Services Ltd',
    description: 'Corporate web presence for LLCDEX Services Limited — clean, professional, and fully responsive across all devices.',
    tech: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    url: 'https://www.llcdexservicesltd.com/',
    screenshot: llcdexImg,
    gradient: 'from-indigo-900/80 via-teal-900/50 to-[#06060f]',
    accent: '#818cf8',
  },
];

const olderProjects = [
  {
    id: 6, number: '06',
    title: 'Apex',
    description: 'A Vue.js web application — one of the earlier projects showcasing component-driven UI development and clean state management.',
    tech: ['Vue.js', 'JavaScript'],
    url: 'https://test-apex.vercel.app/',
    screenshot: apexImg,
    gradient: 'from-sky-900/80 via-blue-900/60 to-[#06060f]',
    accent: '#38bdf8',
  },
  {
    id: 7, number: '07',
    title: 'MovieHub',
    description: 'A movie discovery app fetching live data from a public film API, with search, filtering, and a sleek dark-themed UI.',
    tech: ['Vue.js', 'JavaScript', 'REST API'],
    url: 'https://moviehub-ashen.vercel.app/',
    screenshot: movieImg,
    gradient: 'from-rose-900/80 via-purple-900/60 to-[#06060f]',
    accent: '#f472b6',
  },
  {
    id: 8, number: '08',
    title: 'Foodology',
    description: 'A Vuetify-powered food exploration app with recipe browsing, category filtering, and a rich material design interface.',
    tech: ['Vue.js', 'Vuetify', 'JavaScript'],
    url: 'https://foodology.vercel.app/#/',
    screenshot: foodImg,
    gradient: 'from-orange-900/80 via-amber-900/60 to-[#06060f]',
    accent: '#fb923c',
  },
];

const techBadgeClass = (tech) => {
  if (['Vue.js', 'Nuxt.js', 'Pinia', 'Vuetify'].some(t => tech.includes(t))) return 'badge-teal';
  if (['React', 'Next.js', 'TypeScript', 'Redux', 'React Query'].some(t => tech.includes(t))) return 'badge-blue';
  return 'badge-purple';
};
</script>

<template>
  <section class="section relative overflow-hidden bg-[#06060f]">
    <div class="orb w-[500px] h-[500px] bg-blue-700/10 top-0 right-0"></div>
    <div class="orb w-[400px] h-[400px] bg-purple-700/10 bottom-0 left-0"></div>

    <div class="container-max relative z-10">
      <!-- Header -->
      <div class="mb-14" data-aos="fade-up" data-aos-duration="700">
        <span class="section-label">Portfolio</span>
        <h2 class="text-4xl lg:text-5xl font-bold font-display text-white mt-2">All Projects</h2>
        <p class="text-slate-400 mt-4 max-w-xl text-base leading-relaxed">
          Production applications shipped across fintech, banking, e-commerce, and creative industries.
        </p>
      </div>

      <!-- ── Current Projects ── -->
      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="glass-card overflow-hidden group"
          data-aos="fade-up"
          data-aos-duration="700"
          :data-aos-delay="index * 80"
        >
          <!-- Screenshot / Preview area -->
          <div class="relative h-52 overflow-hidden">
            <div :class="`absolute inset-0 bg-gradient-to-br ${project.gradient}`"></div>
            <div class="absolute inset-0 bg-grid opacity-30"></div>

            <img
              :src="project.screenshot"
              :alt="`${project.title} preview`"
              class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105"
              style="object-position: center 35%"
            />

            <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#111] to-transparent"></div>

            <span class="absolute bottom-2 right-4 text-7xl font-bold font-display text-white/5 select-none leading-none z-10">
              {{ project.number }}
            </span>

            <div class="absolute top-3 left-3 flex items-center gap-2 glass px-3 py-1.5 rounded-full z-10">
              <span class="w-1.5 h-1.5 rounded-full animate-pulse-slow" :style="`background: ${project.accent};`"></span>
              <span class="text-[11px] font-medium text-slate-300">Live</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.tech" :key="tech" class="badge" :class="techBadgeClass(tech)">
                {{ tech }}
              </span>
            </div>
            <h3 class="text-lg font-bold font-display text-white mb-2 leading-snug">{{ project.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-5">{{ project.description }}</p>
            <div class="flex items-center justify-between">
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                :style="`color: ${project.accent};`"
              >
                View Live Site
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span class="text-slate-700 text-xs font-display font-bold tracking-widest">{{ project.number }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Earlier Work ── -->
      <div data-aos="fade-up" data-aos-duration="700">
        <div class="flex items-center gap-4 mb-8">
          <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <span class="section-label mb-0">Earlier Work</span>
          <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-5">
          <div
            v-for="(project, index) in olderProjects"
            :key="project.id"
            class="glass-card overflow-hidden group"
            data-aos="fade-up"
            data-aos-duration="700"
            :data-aos-delay="index * 80"
          >
            <div class="relative h-40 overflow-hidden">
              <div :class="`absolute inset-0 bg-gradient-to-br ${project.gradient}`"></div>
              <img
                :src="project.screenshot"
                :alt="`${project.title} preview`"
                class="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:opacity-85 transition-all duration-500 group-hover:scale-105"
                style="object-position: center 35%"
              />
              <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111] to-transparent"></div>
              <div class="absolute top-3 left-3 flex items-center gap-2 glass px-2.5 py-1 rounded-full z-10">
                <span class="text-[10px] font-medium text-slate-400">Legacy</span>
              </div>
            </div>

            <div class="p-5">
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span v-for="tech in project.tech" :key="tech" class="badge" :class="techBadgeClass(tech)">
                  {{ tech }}
                </span>
              </div>
              <h3 class="text-base font-bold font-display text-white mb-1.5">{{ project.title }}</h3>
              <p class="text-slate-500 text-xs leading-relaxed mb-4">{{ project.description }}</p>
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 hover:gap-2.5"
                :style="`color: ${project.accent};`"
              >
                View Site
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
