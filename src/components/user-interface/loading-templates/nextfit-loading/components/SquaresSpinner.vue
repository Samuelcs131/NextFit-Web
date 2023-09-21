<template>
  <div class="spinner-box">
    <logo-nextfit class="logo"/>
    <div class="configure-border-1">
      <div class="configure-core"></div>
    </div>
    <div class="configure-border-2">
      <div class="configure-core"></div>
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

.configure-border-1 {
  width: 115px;
  height: 115px;
  padding: 3px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $secondary;
  animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
}

.configure-border-2 {
  width: 115px;
  height: 115px;
  padding: 3px;
  left: -115px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $primary;
  transform: rotate(45deg);
  animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
}

.configure-core {
  width: 100%;
  height: 100%;
  background-color: $dark;
}

@keyframes configure-xclockwise {
  0% {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-135deg);
  }
  75% {
    transform: rotate(-225deg);
  }
  100% {
    transform: rotate(-315deg);
  }
}
</style>
