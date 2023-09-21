<template>
  <div class="spinner-wrapper">
    <logo-nextfit class="logo" size="60px" />
    <div class="spinner"></div>
  </div>
</template>
<script setup lang="ts">
  import LogoNextfit from 'src/components/user-interface/logo/LogoNextfit.vue'
</script>
<style lang="scss">
.spinner-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.spinner {
  position: relative;
  margin: auto;
  box-sizing: border-box;
  background-clip: padding-box;
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 4px solid $grey-500-opacity-10;
  transform-origin: 50% 60%;
  transform: perspective(150px) rotateX(66deg);
  animation: spinner-wiggle 1.2s infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    margin: -4px;
    box-sizing: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: 0.05;
    border: inherit;
    border-color: transparent;
    animation: spinner-spin 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
      spinner-fade 1.2s linear infinite;
  }

  &::before {
    border-top-color: $primary;
  }

  &::after {
    border-top-color: $secondary;
    animation-delay: 0.3s;
  }
}

@keyframes spinner-spin {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spinner-fade {
  20% {
    opacity: 0.1;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0.1;
  }
}
</style>
