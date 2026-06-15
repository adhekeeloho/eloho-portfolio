<template>
  <section class="section relative overflow-hidden bg-[#06060f]">
    <!-- Orbs -->
    <div class="orb w-[400px] h-[400px] bg-teal-500/10 top-0 left-1/2 -translate-x-1/2"></div>

    <div class="container-max relative z-10">
      <!-- Header -->
      <div class="text-center mb-14" data-aos="fade-up" data-aos-duration="700">
        <span class="section-label justify-center">Testimonials</span>
        <h2 class="text-4xl lg:text-5xl font-bold font-display text-white mt-2">
          What Others Say
        </h2>
        <p class="text-slate-400 mt-4 text-base">
          Don't just take my word for it.
        </p>
      </div>

      <!-- Testimonial cards -->
      <div class="grid md:grid-cols-2 gap-6">

        <!-- Card 1 -->
        <div
          class="glass-card p-8 flex flex-col gap-6"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <!-- Quote icon -->
          <svg class="w-8 h-8 text-teal-400/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>

          <!-- Quote text -->
          <blockquote class="text-slate-300 leading-relaxed text-base flex-1">
            Adheke Eloho Joy has technical proficiency in VueJs, ReactJs and NextJs programming
            languages which is truly impressive. She has consistently demonstrated the
            ability to mention specific achievements in projects which therefore
            showcases her analytical and problem-solving skills.
          </blockquote>

          <!-- Divider -->
          <div class="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
              <img
                src="../assets/Victor-Ephraim.png"
                alt="Ephraim Victor"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <p class="font-semibold text-white font-display">Ephraim Victor</p>
              <p class="text-slate-400 text-sm leading-snug mt-0.5">
                General Manager, PeopleOS<br />
                <span class="text-slate-500 text-xs">Talent Acquisition &amp; HR</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="glass-card p-8 flex flex-col gap-6"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <!-- Quote icon -->
          <svg class="w-8 h-8 text-purple-400/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>

          <!-- Quote text -->
          <blockquote class="text-slate-300 leading-relaxed text-base flex-1">
            Beyond her technical skills, what sets Adheke Eloho Joy apart is her
            exceptional teamwork and collaboration. In our fast-paced industry,
            effective communication and collaboration are crucial. Adheke Eloho Joy
            has consistently proven her ability to work seamlessly with cross-functional
            teams, fostering a positive and collaborative work environment.
          </blockquote>

          <!-- Divider -->
          <div class="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
              <img
                src="../assets/mena2.jpg"
                alt="Idise Elomena"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <p class="font-semibold text-white font-display">Idise Elomena</p>
              <p class="text-slate-400 text-sm leading-snug mt-0.5">
                Senior Developer<br />
                <span class="text-slate-500 text-xs">Sparkle Nigeria</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
