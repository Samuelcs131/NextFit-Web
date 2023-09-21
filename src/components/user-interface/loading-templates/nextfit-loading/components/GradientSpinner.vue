<template>
  <div class="spinner-box">
    <logo-nextfit class="logo" />
    <div class="circle-border">
      <div class="circle-core"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import LogoNextfit from 'src/components/user-interface/logo/LogoNextfit.vue'
</script>
<style lang="scss" scoped>
.spinner-box {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  .logo {
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.circle-border {
  width: 150px;
  height: 150px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(0deg, $primary-opacity-15 33%, $primary 100%);
  animation: spin 0.8s linear 0s infinite;
}
.circle-core {
  width: 100%;
  height: 100%;
  background-color: $dark-page;
  border-radius: 50%;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
