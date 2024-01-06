<template>
  <div>
    <Header>
      <template #maincontent>
        <div
          class="relative h-screen w-full flex items-center justify-center look bg-center"
        >
          <div
            class="absolute top-0 right-0 bottom-0 left-0 bg-gray-500 opacity-75"
          ></div>

          <form @submit.prevent="submitForm" class="z-10 p-10" >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  v-model="name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  v-model="lastName"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email Address
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="********@*****.**"
                  v-model="email"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  v-model="message"
                >
                </textarea>
              </div>
              <div class="flex justify-end w-full px-3">
                <button
                  class="shadow bg-gradient-to-r from-blue-300 via-teal-500 to-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </template>
    </Header>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      name: '',
      lastName: "",
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Generate a mailto link with the form data
      const mailtoLink = `mailto:Adheke.eloho699@gmail.com?subject=Contact Form Submission&body=Name: ${this.name}%0AEmail: ${this.email}%0AMessage: ${this.message} %0ALastName: ${this.lastName}`;

      // Open the default email client
      window.location.href = mailtoLink;
    }
  }
};
</script>

<style scoped>
.look {
  background-image: url(../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg);
  background-size: cover;
}
</style>
