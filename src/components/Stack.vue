<script setup>
// Static imports so Vite properly bundles each asset
import vueIcon     from '../assets/vue-js-1.svg'
import reactIcon   from '../assets/react-2.svg'
import nuxtIcon    from '../assets/nuxt-2.svg'
import piniaIcon   from '../assets/piniaJs-1.svg'
import reduxIcon   from '../assets/redux.svg'
import tailwindIcon from '../assets/tailwind-css-2.svg'
import bootstrapIcon from '../assets/bootstrap-4.svg'
import vuetifyIcon  from '../assets/vuetify.svg'
import jsIcon       from '../assets/javascript-1.svg'
import htmlIcon     from '../assets/html-1.svg'
import figmaIcon    from '../assets/figma-1.svg'
import viteIcon     from '../assets/vitejs.svg'
import githubIcon   from '../assets/github2.png'

const categories = [
  {
    label: 'Frameworks & Libraries',
    accent: '#60a5fa',
    items: [
      { name: 'Vue.js',   icon: vueIcon,   letter: null },
      { name: 'React.js', icon: reactIcon, letter: null },
      { name: 'Next.js',  icon: null,      letter: 'N'  },
      { name: 'Nuxt.js',  icon: nuxtIcon,  letter: null },
    ],
  },
  {
    label: 'State & Data Management',
    accent: '#2dd4bf',
    items: [
      { name: 'Pinia',         icon: piniaIcon, letter: null  },
      { name: 'Redux Toolkit', icon: reduxIcon, letter: null  },
      { name: 'React Query',   icon: reactIcon, letter: null  },
      { name: 'Vuex',          icon: vueIcon,   letter: null  },
    ],
  },
  {
    label: 'Styling & UI Libraries',
    accent: '#a78bfa',
    items: [
      { name: 'Tailwind CSS', icon: tailwindIcon,  letter: null  },
      { name: 'Bootstrap',    icon: bootstrapIcon, letter: null  },
      { name: 'Vuetify',      icon: vuetifyIcon,   letter: null  },
      { name: 'SCSS / CSS',   icon: null,           letter: 'SC' },
    ],
  },
  {
    label: 'Languages & Design',
    accent: '#fb923c',
    items: [
      { name: 'TypeScript',  icon: null,    letter: 'TS' },
      { name: 'JavaScript',  icon: jsIcon,  letter: null },
      { name: 'HTML5',       icon: htmlIcon,letter: null },
      { name: 'Figma',       icon: figmaIcon,letter: null },
    ],
  },
  {
    label: 'Tools & Deployment',
    accent: '#34d399',
    items: [
      { name: 'Vite',         icon: viteIcon,   letter: null  },
      { name: 'Git / GitHub', icon: githubIcon, letter: null  },
      { name: 'Vercel',       icon: null,        letter: 'Vc' },
      { name: 'Netlify',      icon: null,        letter: 'Nl' },
    ],
  },
];
</script>

<template>
  <section class="section relative overflow-hidden bg-[#06060f]">
    <div class="orb w-[400px] h-[400px] bg-teal-500/10 -bottom-20 right-0"></div>

    <div class="container-max relative z-10">
      <!-- Header -->
      <div class="text-center mb-14" data-aos="fade-up" data-aos-duration="700">
        <span class="section-label justify-center">Tech Stack</span>
        <h2 class="text-4xl lg:text-5xl font-bold font-display text-white mt-2">
          Tools &amp; Technologies
        </h2>
        <p class="text-slate-400 mt-4 max-w-lg mx-auto text-base leading-relaxed">
          A full-spectrum skill set covering frameworks, state management, styling,
          languages, and deployment — from concept to production.
        </p>
      </div>

      <!-- Category blocks -->
      <div class="space-y-10">
        <div
          v-for="(cat, ci) in categories"
          :key="cat.label"
          data-aos="fade-up"
          data-aos-duration="700"
          :data-aos-delay="ci * 70"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="h-[2px] w-6 rounded-full shrink-0" :style="`background: ${cat.accent};`"></div>
            <p class="text-xs font-bold uppercase tracking-widest" :style="`color: ${cat.accent};`">
              {{ cat.label }}
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div
              v-for="item in cat.items"
              :key="item.name"
              class="glass-card p-4 flex items-center gap-3 group cursor-default"
            >
              <!-- Icon box -->
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                :style="`background: ${cat.accent}12; border: 1px solid ${cat.accent}25;`"
              >
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  :alt="item.name"
                  class="w-6 h-6 object-contain"
                />
                <span
                  v-else
                  class="text-xs font-black leading-none"
                  :style="`color: ${cat.accent};`"
                >{{ item.letter }}</span>
              </div>
              <p class="text-sm font-semibold text-slate-300 leading-tight group-hover:text-white transition-colors">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional skills pills -->
      <div class="mt-12 glass-card p-6" data-aos="fade-up" data-aos-duration="700">
        <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Also experienced with</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in [
              'SSR / SSG', 'PWA', 'AES Encryption', 'JWT / NextAuth',
              'Axios', 'TanStack Query', 'ShadCN', 'Ant Design', 'Material UI',
              'Framer Motion', 'REST APIs', 'Azure', 'GitLab', 'Code Splitting', 'Lazy Loading',
            ]"
            :key="skill"
            class="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
