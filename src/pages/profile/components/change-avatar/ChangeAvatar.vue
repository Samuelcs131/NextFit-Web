<template>
  <q-card v-bind="$vCard">
    <q-card-section>
      <div class="flex justify-center q-mb-md">
        <div class="q-pa-sm border-dashed circle-border">
          <q-avatar size="7rem" class="bg-theme-neutral">
            <q-img
              :src="avatarPicturesDictionary[state.user.fields.avatar!].img"
              :alt="avatarPicturesDictionary[state.user.fields.avatar!].label"
            />
          </q-avatar>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <p class="text-caption">Escolha um personagem</p>
      <div class="row gap-md justify-center">
        <q-btn
          v-for="(avatar, idx) in avatarPicturesOptions"
          :key="idx"
          round
          :class="
            state.user.fields.avatar === avatar.value
              ? 'bg-primary-opacity-30'
              : 'bg-theme-neutral'
          "
          unelevated
          v-on:click="setAvatar(avatar.value)"
        >
          <q-avatar size="42px">
            <img :src="avatar.img" :alt="avatar.label" />
          </q-avatar>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
  import { useProfileMain } from '../../composables/useProfileMain'
  import {
    avatarPicturesDictionary,
    avatarPicturesOptions,
  } from 'src/constants/user/avatar.const'

  const { state, setAvatar } = useProfileMain()
</script>
