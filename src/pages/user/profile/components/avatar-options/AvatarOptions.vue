<template>
  <div>
    <q-btn
      round
      :color="currentAvatar === id ? 'primary' : 'bg'" unelevated
      v-on:click="$emit('setAvatar', id)"
    >
      <q-avatar size="38px">
        <img :src="img" :alt="name" />
      </q-avatar>
    </q-btn>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  img: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: Number,
  },
  currentAvatar: {
    required: true,
    type: Number
  }
})
</script>
