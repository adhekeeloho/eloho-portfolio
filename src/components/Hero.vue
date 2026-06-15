<script setup>
import Download from './Download.vue';
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-[#06060f]">
    <!-- Ambient orbs -->
    <div class="orb w-[700px] h-[700px] bg-blue-700/20 -top-60 -left-60 animate-float-slow"></div>
    <div class="orb w-[500px] h-[500px] bg-teal-500/15 top-1/2 -right-40 animate-float"></div>
    <div class="orb w-[350px] h-[350px] bg-purple-700/15 bottom-10 left-1/3"></div>

    <!-- Subtle grid -->
    <div class="absolute inset-0 bg-grid opacity-100"></div>

    <!-- Floating background code snippets -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <span class="code-bg-snippet" style="top:10%;left:5%;animation-delay:0s;color:rgba(45,212,191,0.08);">&lt;Component /&gt;</span>
      <span class="code-bg-snippet" style="top:72%;left:3%;animation-delay:1.8s;color:rgba(96,165,250,0.07);">v-model="data"</span>
      <span class="code-bg-snippet" style="top:86%;left:26%;animation-delay:3.2s;color:rgba(167,139,250,0.07);">useState(false)</span>
      <span class="code-bg-snippet" style="top:18%;right:3%;animation-delay:0.7s;color:rgba(45,212,191,0.06);">async / await</span>
      <span class="code-bg-snippet" style="top:54%;right:4%;animation-delay:2.5s;color:rgba(96,165,250,0.07);">{ ...spread }</span>
      <span class="code-bg-snippet" style="top:40%;left:1%;animation-delay:4s;color:rgba(251,146,60,0.07);">useEffect([])</span>
      <span class="code-bg-snippet" style="top:63%;right:2%;animation-delay:1.3s;color:rgba(167,139,250,0.07);">import { ref }</span>
      <span class="code-bg-snippet" style="top:30%;left:7%;animation-delay:5s;color:rgba(45,212,191,0.06);">computed(() =&gt; {})</span>
    </div>

    <div class="container-max relative z-10 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- ── Left: Text ── -->
        <div class="space-y-8 order-2 lg:order-1" data-aos="fade-right" data-aos-duration="800">

          <!-- Status badge -->
          <div class="inline-flex items-center gap-2.5 glass px-4 py-2 rounded-full w-fit">
            <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse-slow"></span>
            <span class="text-sm text-slate-300 font-medium">Available for new opportunities</span>
          </div>

          <!-- Heading -->
          <div>
            <p class="text-slate-400 font-medium text-base mb-3 tracking-wide">Hi there, I'm</p>
            <h1 class="font-display leading-none mb-4">
              <span class="block text-sm text-slate-500 font-semibold tracking-[0.32em] uppercase mb-2">Eloho Joy</span>
              <span class="block text-[3.6rem] lg:text-[5.2rem] font-black gradient-text leading-none">Adheke</span>
            </h1>
            <div class="flex items-center gap-3">
              <div class="h-[2px] w-10 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
              <p class="text-xl lg:text-2xl text-slate-300 font-display font-medium">
                Software Developer
              </p>
            </div>
          </div>

          <!-- Bio -->
          <p class="text-slate-400 text-base lg:text-lg leading-relaxed max-w-[480px]">
            Visionary software developer with a passion for creating seamless,
            high-performance digital experiences. I specialise in
            <span class="text-teal-400 font-semibold">Next.js</span>,
            <span class="text-blue-400 font-semibold">Vue.js</span>, and
            <span class="text-purple-400 font-semibold">React.js</span> —
            transforming complex ideas into intuitive, responsive, and visually stunning interfaces.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4">
            <Download pdf-url="/Adheke, Eloho-C.V.pdf" pdf-file-name="Adheke-Eloho-CV.pdf" />
            <RouterLink to="/portfolio" class="btn-outline">
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </RouterLink>
          </div>

          <!-- Social links -->
          <div class="flex items-center gap-3 pt-1">
            <a href="https://github.com/adhekeeloho" target="_blank" rel="noopener"
              class="glass p-3 rounded-xl text-slate-400 hover:text-white transition-all duration-300" aria-label="GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/eloho-joy-adheke-569666234" target="_blank" rel="noopener"
              class="glass p-3 rounded-xl text-slate-400 hover:text-blue-400 transition-all duration-300" aria-label="LinkedIn">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/dev_eloho/" target="_blank" rel="noopener"
              class="glass p-3 rounded-xl text-slate-400 hover:text-pink-400 transition-all duration-300" aria-label="Instagram">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <div class="h-5 w-[1px] bg-white/10 mx-1"></div>
            <span class="text-slate-500 text-xs font-medium tracking-wider uppercase">Let's connect</span>
          </div>
        </div>

        <!-- ── Right: Mobile – mini orbital ── -->
        <div class="lg:hidden relative flex justify-center order-1 pb-6" data-aos="fade-up" data-aos-duration="800">
          <div class="relative" style="width:310px;height:350px;">

            <!-- Glow -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-48 h-48 rounded-full bg-teal-400/10 blur-3xl"></div>
            </div>

            <!-- Two orbit rings (reuse .orbit-ring base + inline overrides) -->
            <div class="orbit-ring" style="width:252px;height:252px;margin-top:-126px;margin-left:-126px;border:1px solid rgba(45,212,191,0.22);animation:ring1-spin 18s linear infinite;"></div>
            <div class="orbit-ring" style="width:298px;height:298px;margin-top:-149px;margin-left:-149px;border:1px solid rgba(96,165,250,0.13);animation:ring2-spin 26s linear infinite;"></div>

            <!-- Tech labels -->
            <div class="o-tag" style="top:3%;left:50%;translate:-50% 0;animation-delay:0s;font-size:0.62rem;padding:4px 9px;">
              <span class="o-dot" style="background:#2dd4bf;box-shadow:0 0 5px #2dd4bf;width:5px;height:5px;"></span> Vue.js
            </div>
            <div class="o-tag" style="top:24%;right:0;animation-delay:0.8s;font-size:0.62rem;padding:4px 9px;">
              <span class="o-dot" style="background:#60a5fa;box-shadow:0 0 5px #60a5fa;width:5px;height:5px;"></span> React.js
            </div>
            <div class="o-tag" style="bottom:4%;left:50%;translate:-50% 0;animation-delay:2.4s;font-size:0.62rem;padding:4px 9px;">
              <span class="o-dot" style="background:#fb923c;box-shadow:0 0 5px #fb923c;width:5px;height:5px;"></span> TypeScript
            </div>
            <div class="o-tag" style="top:24%;left:0;animation-delay:1.2s;font-size:0.62rem;padding:4px 9px;">
              <span class="o-dot" style="background:#a78bfa;box-shadow:0 0 5px #a78bfa;width:5px;height:5px;"></span> Next.js
            </div>

            <!-- Photo centered -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div class="gradient-border relative" style="border-radius:22px;">
                <div class="bg-[#06060f] rounded-[21px] p-1.5">
                  <img src="../assets/eloho-profile.jpeg" alt="Eloho Joy Adheke"
                       class="w-[168px] h-[208px] object-cover rounded-[18px]" />
                </div>
                <div class="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl shadow-card border border-white/10">
                  <p class="text-[10px] text-slate-400 font-medium">Experience</p>
                  <p class="text-base font-bold gradient-text font-display leading-none mt-0.5">4+ Years</p>
                </div>
                <div class="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl shadow-card border border-white/10">
                  <p class="text-[10px] text-slate-400 font-medium">Projects</p>
                  <p class="text-base font-bold gradient-text font-display leading-none mt-0.5">15+</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- ── Right: Desktop orbital animation ── -->
        <div class="hidden lg:flex justify-end order-1 lg:order-2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
          <div class="orbit-wrap">

            <!-- Rotating ellipse rings (like Passpoint) -->
            <div class="orbit-ring orbit-r1"></div>
            <div class="orbit-ring orbit-r2"></div>
            <div class="orbit-ring orbit-r3"></div>

            <!-- Floating tech label pills -->
            <div class="o-tag" style="top:2%;left:50%;translate:-50% 0;animation-delay:0s;">
              <span class="o-dot" style="background:#2dd4bf;box-shadow:0 0 6px #2dd4bf;"></span> Vue.js
            </div>
            <div class="o-tag" style="top:18%;right:0;animation-delay:0.8s;">
              <span class="o-dot" style="background:#60a5fa;box-shadow:0 0 6px #60a5fa;"></span> React.js
            </div>
            <div class="o-tag" style="bottom:28%;right:0;animation-delay:1.6s;">
              <span class="o-dot" style="background:#a78bfa;box-shadow:0 0 6px #a78bfa;"></span> Next.js
            </div>
            <div class="o-tag" style="bottom:2%;left:50%;translate:-50% 0;animation-delay:2.4s;">
              <span class="o-dot" style="background:#fb923c;box-shadow:0 0 6px #fb923c;"></span> TypeScript
            </div>
            <div class="o-tag" style="top:26%;left:0;animation-delay:1.2s;">
              <span class="o-dot" style="background:#f472b6;box-shadow:0 0 6px #f472b6;"></span> Tailwind
            </div>
            <div class="o-tag" style="bottom:38%;left:0;animation-delay:3s;">
              <span class="o-dot" style="background:#34d399;box-shadow:0 0 6px #34d399;"></span> Figma
            </div>

            <!-- Profile photo centered in orbit -->
            <div class="orbit-center">
              <div class="gradient-border relative" style="border-radius: 28px;">
                <div class="bg-[#06060f] rounded-[27px] p-2">
                  <img
                    src="../assets/eloho-profile.jpeg"
                    alt="Eloho Joy Adheke"
                    class="w-[230px] h-[280px] object-cover rounded-3xl"
                  />
                </div>
                <!-- Stat 1 -->
                <div class="absolute -bottom-5 -left-6 glass px-4 py-3 rounded-2xl shadow-card border border-white/10">
                  <p class="text-[11px] text-slate-400 font-medium">Experience</p>
                  <p class="text-xl font-bold gradient-text font-display leading-none mt-0.5">4+ Years</p>
                </div>
                <!-- Stat 2 -->
                <div class="absolute -top-5 -right-6 glass px-4 py-3 rounded-2xl shadow-card border border-white/10">
                  <p class="text-[11px] text-slate-400 font-medium">Projects</p>
                  <p class="text-xl font-bold gradient-text font-display leading-none mt-0.5">15+</p>
                </div>
              </div>
            </div>

            <!-- Floating mini code terminal -->
            <div class="code-card absolute" style="bottom:9%;right:-2%;animation-delay:1.5s;">
              <div class="flex items-center gap-1.5 mb-2.5">
                <span class="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>
                <span class="ml-2 text-[9px] text-slate-500 font-mono">eloho.dev</span>
              </div>
              <div class="font-mono text-[10px] leading-relaxed space-y-0.5">
                <p><span class="text-purple-400">const</span> <span class="text-teal-300">dev</span> <span class="text-slate-400">= () =&gt; {</span></p>
                <p class="pl-3"><span class="text-slate-500">// crafting magic ✨</span></p>
                <p class="pl-3"><span class="text-blue-400">return</span> <span class="text-green-300">'shipping...'</span></p>
                <p class="text-slate-400">}</p>
                <p class="mt-1 text-teal-400">▊<span class="animate-terminal-blink">_</span></p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
      <span class="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
      <div class="w-[1px] h-8 bg-gradient-to-b from-slate-600 to-transparent"></div>
    </div>
  </section>
</template>
