<template>
  <div class="flex gap-md">
    <div
      v-for="(color, idx) in colorsOptions"
      :key="idx"
      class="wrapper-color"
      :class="`${selectedThemeColor === color.name ? 'active' : ''}`"
    >
      <div
        class="item-nex"
        @click="() => setThemeColors(color.name)"
        :style="{
          backgroundColor: getThemeColor(color.name).primary.main,
          borderColor: getThemeColor(color.name).primary.main,
        }"
      >
        <span
          :style="{
            backgroundColor: getThemeColor(color.name).secondary.main,
          }"
        ></span>
        <q-tooltip>{{ color.name }}</q-tooltip>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { themeColors } from 'src/theme/colors.theme'
  import { ThemeColors } from 'src/theme/enums/colors.enum'
  import { colorsOptions } from '../constants/colorsOptions.const'
  import { ref, watch } from 'vue'

  interface IProps {
    modelValue: string
  }

  const props = defineProps<IProps>()

  const selectedThemeColor = ref<string>(props.modelValue)

  const emit = defineEmits(['update:modelValue'])

  function setThemeColors(color: ThemeColors) {
    emit('update:modelValue', color)
  }

  function getThemeColor(color: ThemeColors) {
    return themeColors[color]
  }

  watch(
    () => props.modelValue,
    (value) => {
      selectedThemeColor.value = value
    }
  )
</script>
<style lang="scss" scoped>
.item-nex {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  cursor: pointer;

  span {
    height: 100%;
    width: 50%;
    transform-origin: 100% 50%;
    transform: rotate(225deg);
  }
  &.active {
    border: 5px solid;
  }
}
.wrapper-color {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  &.active {
    border: 1px solid $primary;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 50%,
      rgba($primary-rgb, $alpha: 0.5) 100%
    );
  }
}
</style>
