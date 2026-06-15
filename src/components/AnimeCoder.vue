<template>
  <div class="select-none pointer-events-none w-full flex justify-center">
    <img
      src="@/assets/coding-girl.svg"
      alt="Developer illustration"
      class="coding-girl w-full max-w-[380px] opacity-90"
    />
  </div>
</template>

<style scoped>
.coding-girl {
  animation: girl-float 6s ease-in-out infinite;
  filter: drop-shadow(0 8px 32px rgba(45, 212, 191, 0.3));
}

@keyframes girl-float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
</style>
