<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

const name     = ref('');
const lastName = ref('');
const email    = ref('');
const message  = ref('');
const status   = ref(''); // '' | 'loading' | 'success' | 'error'
const errorMsg = ref('');

async function submitForm() {
  status.value = 'loading';
  errorMsg.value = '';

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name:  `${name.value} ${lastName.value}`.trim(),
        from_email: email.value,
        message:    message.value,
        reply_to:   email.value,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );

    status.value = 'success';
    name.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';
  } catch (err) {
    console.error(err);
    status.value = 'error';
    errorMsg.value = 'Something went wrong. Please reach out directly at joyadheke@gmail.com';
  }
}
</script>

<template>
  <div class="bg-[#06060f]">
    <Header>
      <template #maincontent>
        <section class="section relative overflow-hidden min-h-[calc(100vh-6rem)]">
          <div class="orb w-[500px] h-[500px] bg-teal-600/15 -top-40 -right-40"></div>
          <div class="orb w-[400px] h-[400px] bg-blue-700/10 bottom-0 -left-40"></div>

          <div class="container-max relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-start">

              <!-- ── Left: Info ── -->
              <div data-aos="fade-right" data-aos-duration="700">
                <span class="section-label">Get In Touch</span>
                <h1 class="text-4xl lg:text-5xl font-bold font-display text-white mt-2 mb-6">
                  Let's Work<br />
                  <span class="gradient-text">Together</span>
                </h1>
                <p class="text-slate-400 text-base leading-relaxed mb-10">
                  Have a project in mind, want to collaborate, or just want to say hi?
                  Fill in the form and I'll get back to you promptly.
                </p>

                <div class="space-y-4">
                  <!-- Email -->
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=joyadheke@gmail.com" target="_blank" rel="noopener"
                    class="flex items-center gap-4 glass-card p-4 group">
                    <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                      <svg class="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Email</p>
                      <p class="text-slate-300 group-hover:text-white transition-colors text-sm">joyadheke@gmail.com</p>
                    </div>
                  </a>

                  <!-- LinkedIn -->
                  <a href="https://www.linkedin.com/in/eloho-joy-adheke-569666234" target="_blank" rel="noopener"
                    class="flex items-center gap-4 glass-card p-4 group">
                    <div class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">LinkedIn</p>
                      <p class="text-slate-300 group-hover:text-white transition-colors text-sm">Eloho Joy Adheke</p>
                    </div>
                  </a>

                  <!-- GitHub -->
                  <a href="https://github.com/adhekeeloho" target="_blank" rel="noopener"
                    class="flex items-center gap-4 glass-card p-4 group">
                    <div class="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                      <svg class="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">GitHub</p>
                      <p class="text-slate-300 group-hover:text-white transition-colors text-sm">adhekeeloho</p>
                    </div>
                  </a>

                  <!-- Instagram -->
                  <a href="https://www.instagram.com/dev_eloho/" target="_blank" rel="noopener"
                    class="flex items-center gap-4 glass-card p-4 group">
                    <div class="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                      <svg class="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Instagram</p>
                      <p class="text-slate-300 group-hover:text-white transition-colors text-sm">@dev_eloho</p>
                    </div>
                  </a>
                </div>
              </div>

              <!-- ── Right: Form ── -->
              <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="100">

                <!-- Success state -->
                <div v-if="status === 'success'" class="glass-card p-10 flex flex-col items-center text-center gap-5">
                  <div class="w-16 h-16 rounded-full bg-teal-500/15 border border-teal-500/30 flex items-center justify-center">
                    <svg class="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold font-display text-white mb-2">Message Sent!</h3>
                    <p class="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                  <button @click="status = ''" class="btn-outline text-sm py-2.5 px-6">
                    Send Another
                  </button>
                </div>

                <!-- Form -->
                <form v-else @submit.prevent="submitForm" class="glass-card p-8 space-y-5">
                  <h2 class="text-xl font-bold font-display text-white mb-2">Send a Message</h2>
                  <p class="text-slate-500 text-sm mb-6">I'll receive your message directly in my inbox.</p>

                  <!-- Name row -->
                  <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">First Name *</label>
                      <input v-model="name" type="text" placeholder="Jane" required
                        class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400/50 transition-all duration-200" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Last Name</label>
                      <input v-model="lastName" type="text" placeholder="Doe"
                        class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400/50 transition-all duration-200" />
                    </div>
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address *</label>
                    <input v-model="email" type="email" placeholder="jane@example.com" required
                      class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400/50 transition-all duration-200" />
                  </div>

                  <!-- Message -->
                  <div>
                    <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Your Message *</label>
                    <textarea v-model="message" rows="5" placeholder="Tell me about your project..." required
                      class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400/50 transition-all duration-200 resize-none"></textarea>
                  </div>

                  <!-- Error -->
                  <p v-if="status === 'error'" class="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                    {{ errorMsg }}
                  </p>

                  <!-- Submit -->
                  <button type="submit" :disabled="status === 'loading'" class="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                    <span v-if="status === 'loading'" class="flex items-center gap-2">
                      <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </span>
                    <span v-else class="flex items-center gap-2">
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </span>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </template>
    </Header>
    <Footer />
  </div>
</template>
