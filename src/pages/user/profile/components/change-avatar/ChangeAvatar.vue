<template>
  <q-card v-bind="$vCard">
    <q-card-section>
      <div class="flex justify-center q-mb-md">
        <div class="q-pa-sm border-dashed circle-border">
          <q-avatar size="7rem">
            <q-img
              :src="getAvatar(state.form.avatar).img"
              :alt="getAvatar(state.form.avatar).name"
            />
          </q-avatar>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <p class="text-caption">Escolha um personagem</p>
      <div class="row gap-md justify-center">
        <AvatarOptions
          v-for="avatar in avatars"
          :key="avatar.id"
          v-bind="avatar"
          :currentAvatar="state.form.avatar"
          @setAvatar="setAvatar"
        />
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { useProfileMain } from '../../composables/useProfileMain'
import { getAvatar } from 'src/utils/avatar/avatar'
import { avatars } from 'src/utils/avatar/avatars.const'
import AvatarOptions from '../avatar-options/AvatarOptions.vue'

const { state, setAvatar } = useProfileMain()
</script>
