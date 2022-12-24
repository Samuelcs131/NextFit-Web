<template>
  <q-item v-ripple clickable tag="a" :to="link" @click="navegation(title)">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import useUserLayout from 'src/layouts/user/composables/useUserLayout'

export interface EssentialLinkProps {
  title: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  link: '#',
  icon: ''
})

function navegation (title: string) {
  userLayoutState.value.toolbarTitle = title
}

const { userLayoutState } = useUserLayout()
</script>
