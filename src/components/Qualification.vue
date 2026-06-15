<script setup>
import AnimeCoder from './AnimeCoder.vue';

// Deterministic pseudo-random — same seed = same visual pattern every render
function seededRng(seed) {
  let s = seed;
  return () => { s = (s * 1664525 + 1013904223) & 0x7fffffff; return s / 0x7fffffff; };
}
const rng = seededRng(137);

// Calculate how many weeks of the current year have elapsed
const _now = new Date();
const _startOfYear = new Date(_now.getFullYear(), 0, 1);
const _dayOfYear = Math.floor((_now - _startOfYear) / 86400000);
const weeksElapsed = Math.min(52, Math.ceil((_dayOfYear + 1) / 7));
const currentYear = _now.getFullYear();

// 52 weeks × 7 days = 364 cells (grid-auto-flow: column fills day-by-day per week)
// Weeks beyond weeksElapsed are "future" — shown as near-invisible placeholders
const activityCells = Array.from({ length: 364 }, (_, i) => {
  const weekIndex = Math.floor(i / 7);
  if (weekIndex >= weeksElapsed) return { level: 'future', delay: 0 };
  const r = rng();
  const weekDelay = weekIndex * 0.018;
  if (r > 0.76) return { level: 'high', delay: weekDelay };
  if (r > 0.55) return { level: 'mid',  delay: weekDelay };
  if (r > 0.35) return { level: 'low',  delay: weekDelay };
  return           { level: 'empty', delay: 0 };
});
const cellClass = {
  high:   'bg-teal-400/80 act-cell',
  mid:    'bg-teal-400/42 act-cell',
  low:    'bg-blue-400/22',
  empty:  'bg-white/[0.04]',
  future: 'bg-white/[0.015]',
};

const experiences = [
  {
    id: 1,
    role: 'Software Developer',
    org: 'Sterling Bank',
    period: 'August 2022 – Present',
    type: 'work',
    active: true,
    highlights: ['SocialPay', 'Sterling Ikollect', 'OneTrade App', 'Gazelle'],
  },
  {
    id: 2,
    role: 'Frontend Developer (Contract)',
    org: 'Mavieva Group',
    period: 'September 2025 – January 2026',
    type: 'work',
    active: false,
    highlights: ['Contract role', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 3,
    role: 'Software Developer',
    org: 'Consonance Investment Managers (Brane)',
    period: 'March 2024 – July 2025',
    type: 'work',
    active: false,
    highlights: ['Brane PWA', 'Stocks features', 'Bill payments'],
  },
  {
    id: 4,
    role: 'Frontend Developer',
    org: 'Bookstars Limited',
    period: 'May 2022 – September 2022',
    type: 'work',
    active: false,
    highlights: ['Vue.js apps', 'API integrations'],
  },
  {
    id: 5,
    role: 'Frontend Developer',
    org: 'Gbagam Limited',
    period: 'June 2021 – April 2022',
    type: 'work',
    active: false,
    highlights: ['Vue.js development', 'UI implementation'],
  },
  {
    id: 6,
    role: 'M.Sc Information Management',
    org: 'Education — 2025',
    period: '2025',
    type: 'education',
    active: false,
    highlights: [],
  },
  {
    id: 7,
    role: 'VueJs Forge Certificate',
    org: 'Certification — 2022',
    period: '2022',
    type: 'cert',
    active: false,
    highlights: [],
  },
  {
    id: 8,
    role: 'B.Sc Marketing (Second Class Upper)',
    org: 'Delta State University, Abraka',
    period: '2016',
    type: 'education',
    active: false,
    highlights: [],
  },
];

const badgeClass = {
  work: 'badge-teal',
  cert: 'badge-purple',
  education: 'badge-blue',
};

const typeLabel = {
  work: 'Work',
  cert: 'Certificate',
  education: 'Education',
};
</script>

<template>
  <section class="section relative overflow-hidden bg-[#06060f]">
    <div class="orb w-[500px] h-[500px] bg-blue-700/10 top-0 left-0"></div>

    <div class="container-max relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <!-- ── Left: Heading + stats ── -->
        <div data-aos="fade-right" data-aos-duration="700">
          <span class="section-label">Background</span>
          <h2 class="text-4xl lg:text-5xl font-bold font-display text-white mt-2 mb-6">
            Qualifications &amp;<br />
            <span class="gradient-text">Experience</span>
          </h2>
          <p class="text-slate-400 text-base leading-relaxed mb-10">
            Over 4 years building production-ready applications across fintech,
            banking, e-commerce, and creative industries. I specialise in
            performance-focused frontend engineering with modern frameworks.
          </p>

          <!-- Stat chips -->
          <div class="flex flex-wrap gap-4 mb-10">
            <div class="glass-card px-6 py-4 flex flex-col items-center gap-1 min-w-[110px]">
              <span class="text-3xl font-bold font-display gradient-text">4+</span>
              <span class="text-slate-400 text-xs font-medium text-center">Years Experience</span>
            </div>
            <div class="glass-card px-6 py-4 flex flex-col items-center gap-1 min-w-[110px]">
              <span class="text-3xl font-bold font-display gradient-text">15+</span>
              <span class="text-slate-400 text-xs font-medium text-center">Projects Shipped</span>
            </div>
            <div class="glass-card px-6 py-4 flex flex-col items-center gap-1 min-w-[110px]">
              <span class="text-3xl font-bold font-display gradient-text">5</span>
              <span class="text-slate-400 text-xs font-medium text-center">Companies</span>
            </div>
          </div>

          <!-- Key achievements -->
          <div class="glass-card p-6">
            <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Key Strengths</p>
            <ul class="space-y-2">
              <li v-for="item in [
                'SSR & SSG optimisation with Next.js',
                'AES end-to-end encryption implementation',
                'PWA development & service workers',
                'JWT / NextAuth authentication flows',
                'Agile, code reviews & team mentorship',
              ]" :key="item" class="flex items-start gap-3 text-sm text-slate-400">
                <span class="text-teal-400 mt-0.5 shrink-0">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- ── Animated Dev Terminal ── -->
          <div class="glass-card p-4 mt-6 overflow-hidden">
            <!-- Window chrome -->
            <div class="flex items-center gap-1.5 mb-3">
              <span class="w-2.5 h-2.5 rounded-full bg-red-400/65"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/65"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-green-400/65"></span>
              <span class="ml-2 text-[10px] text-slate-500 font-mono tracking-wide">~/eloho-dev — zsh</span>
            </div>
            <!-- Terminal lines (each reveals with staggered animation) -->
            <div class="font-mono text-[11px] leading-relaxed space-y-1">
              <p class="t-line" style="animation-delay:0.3s;">
                <span class="text-teal-400">eloho</span><span class="text-slate-600">:~$</span>
                <span class="text-white ml-1">git log --oneline -3</span>
              </p>
              <p class="t-line" style="animation-delay:0.85s;">
                <span class="text-yellow-400">a1f3d2c</span>
                <span class="text-slate-400 ml-1.5">feat: ship new dashboard view</span>
              </p>
              <p class="t-line" style="animation-delay:1.25s;">
                <span class="text-yellow-400">b82e4a1</span>
                <span class="text-slate-400 ml-1.5">fix: pixel-perfect UI polish</span>
              </p>
              <p class="t-line" style="animation-delay:1.6s;">
                <span class="text-yellow-400">c93f0e8</span>
                <span class="text-slate-400 ml-1.5">perf: lazy load heavy routes</span>
              </p>
              <p class="t-line mt-2" style="animation-delay:2.1s;">
                <span class="text-teal-400">eloho</span><span class="text-slate-600">:~$</span>
                <span class="text-white ml-1">npm run build</span>
              </p>
              <p class="t-line" style="animation-delay:2.65s;">
                <span class="text-green-400 mr-1">✓</span>
                <span class="text-slate-400">Built in 1.2s</span>
                <span class="text-slate-600 mx-1">·</span>
                <span class="text-teal-300">ready to deploy</span>
              </p>
              <p class="t-line mt-1" style="animation-delay:3.2s;">
                <span class="text-teal-400">eloho</span><span class="text-slate-600">:~$</span>
                <span class="text-teal-300 ml-1 animate-terminal-blink">▌</span>
              </p>
            </div>
          </div>

          <!-- ── Full-Year Activity Graph (52 × 7) ── -->
          <div class="mt-5">
            <div class="flex items-center justify-between mb-2.5">
              <p class="text-[10px] text-slate-600 uppercase tracking-widest font-bold">Commit activity — {{ currentYear }}</p>
              <div class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-slow"></span>
                <span class="text-[10px] text-teal-400 font-semibold">Active</span>
              </div>
            </div>
            <!-- Month labels -->
            <div class="flex justify-between mb-1 pr-0.5">
              <span v-for="m in ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']"
                    :key="m" class="text-[8px] text-slate-700">{{ m }}</span>
            </div>
            <!-- 52-column × 7-row grid, fills column-by-column (week by week) -->
            <div
              class="grid gap-[2px]"
              style="grid-template-rows: repeat(7, 7px); grid-auto-flow: column; grid-auto-columns: 7px;"
            >
              <div
                v-for="(cell, i) in activityCells"
                :key="i"
                class="w-[7px] h-[7px] rounded-[2px]"
                :class="cellClass[cell.level]"
                :style="cell.level !== 'empty' ? `animation-delay:${cell.delay}s` : ''"
              ></div>
            </div>
            <!-- Day labels -->
            <div class="flex flex-col gap-[2px] absolute -left-6 top-0 hidden">
              <span v-for="d in ['M','T','W','T','F','S','S']" :key="d"
                    class="text-[7px] text-slate-700 h-[7px] flex items-center">{{ d }}</span>
            </div>
          </div>

          <!-- ── Anime Coder ── -->
          <div class="mt-6">
            <AnimeCoder />
          </div>

        </div>

        <!-- ── Right: Timeline ── -->
        <div class="relative" data-aos="fade-left" data-aos-duration="700" data-aos-delay="100">
          <div class="absolute left-5 top-2 bottom-2 timeline-line w-[2px]"></div>

          <div class="space-y-5 pl-14">
            <div
              v-for="(item, index) in experiences"
              :key="item.id"
              class="relative glass-card p-5"
              data-aos="fade-up"
              :data-aos-delay="index * 70"
            >
              <!-- Timeline dot -->
              <div
                class="absolute -left-[37px] top-5 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                :class="item.active ? 'border-teal-400 bg-teal-400/20' : 'border-slate-700 bg-[#06060f]'"
              >
                <div
                  class="w-1.5 h-1.5 rounded-full"
                  :class="item.active ? 'bg-teal-400 animate-pulse' : 'bg-slate-600'"
                ></div>
              </div>

              <!-- Header row -->
              <div class="flex items-center gap-2 flex-wrap mb-2">
                <span class="badge" :class="badgeClass[item.type]">{{ typeLabel[item.type] }}</span>
                <span v-if="item.active" class="text-teal-400 text-xs font-semibold">Current</span>
                <span class="text-slate-600 text-xs ml-auto">{{ item.period }}</span>
              </div>

              <h3 class="text-white font-bold font-display text-base leading-snug">{{ item.role }}</h3>
              <p class="text-slate-400 text-sm mt-0.5 mb-3">{{ item.org }}</p>

              <!-- Highlights -->
              <div v-if="item.highlights.length" class="flex flex-wrap gap-1.5 mt-2">
                <span
                  v-for="h in item.highlights"
                  :key="h"
                  class="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-500 border border-white/5"
                >
                  {{ h }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
