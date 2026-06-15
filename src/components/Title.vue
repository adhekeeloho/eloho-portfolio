<template>
  <section class="section relative overflow-hidden bg-[#06060f]">
    <!-- Orb -->
    <div class="orb w-[400px] h-[400px] bg-blue-700/10 top-0 right-0"></div>

    <div class="container-max relative z-10">
      <!-- Header -->
      <div class="text-center mb-14" data-aos="fade-up" data-aos-duration="700">
        <span class="section-label justify-center">What I Do</span>
        <h2 class="text-4xl lg:text-5xl font-bold font-display text-white mt-2">
          Crafting Digital Experiences<br />
          <span class="gradient-text">That Stand Out</span>
        </h2>
        <p class="text-slate-400 mt-5 max-w-xl mx-auto text-base lg:text-lg leading-relaxed">
          From concept to deployment — I build fast, beautiful, and accessible
          web applications tailored to your goals.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="glass-card p-8" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
          <div class="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold font-display text-white mb-3">Frontend Development</h3>
          <p class="text-slate-400 leading-relaxed text-sm">
            Building responsive, interactive web applications with Vue.js and React.js.
            Clean architecture, reusable components, and pixel-perfect UIs.
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span class="badge badge-blue">Vue.js</span>
            <span class="badge badge-blue">React.js</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="glass-card p-8" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
          <div class="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
          </div>
          <h3 class="text-xl font-bold font-display text-white mb-3">UI / UX Implementation</h3>
          <p class="text-slate-400 leading-relaxed text-sm">
            Translating Figma designs into fluid, accessible interfaces with smooth
            animations and a focus on great user experience.
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span class="badge badge-teal">Figma</span>
            <span class="badge badge-teal">Tailwind</span>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="glass-card p-8" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
          <div class="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold font-display text-white mb-3">Performance & Quality</h3>
          <p class="text-slate-400 leading-relaxed text-sm">
            Optimising for speed, accessibility, and SEO. Writing clean, maintainable
            code with state management using Pinia and Redux.
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span class="badge badge-purple">Pinia</span>
            <span class="badge badge-purple">Redux</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
