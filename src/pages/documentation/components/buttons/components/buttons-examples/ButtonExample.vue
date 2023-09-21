<template>
  <div class="row">
    <div class="col-12 flex gap-sm">
      <q-button
        v-for="(type, idx) in TypeButton"
        :key="idx"
        :visual="type"
        v-bind="props"
        width="120px"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import QButton from 'src/components/user-interface/button/QButton.vue'
import { PropType } from 'vue'
import { IButtonExample } from './types/IButtonExample.type'
import { TypeButton } from 'src/components/user-interface/button/enum/TypeButton.enum'

defineProps({
  props: {
    type: Object as PropType<IButtonExample>,
    required: true,
  },
})
</script>
