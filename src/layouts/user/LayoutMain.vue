<template>
  <q-layout view="lHh LpR fff">
    <q-header class="header-layout-main">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title v-if="route.name">
          {{
            te(route.name.toString())
              ? $t(route.name.toString())
              : route.name.toString()
          }}
        </q-toolbar-title>

        <q-space />

        <q-item :clickable="false">
          <q-btn round unelevated>
            <q-avatar size="44px" class="bg-theme-paper">
              <q-img
                v-if="userStore.userState"
                loading="lazy"
                :src="avatarPicturesDictionary[userStore.userState.avatar].img"
                :alt="
                  avatarPicturesDictionary[userStore.userState.avatar].label
                "
              />
            </q-avatar>
          </q-btn>
          <q-menu class="q-card--bordered" v-bind="$vMenu">
            <q-list style="min-width: 150px" dense>
              <q-item class="q-my-xs non-selectable">
                <q-item-section>
                  <q-item-label>{{ userStore.userState?.name }}</q-item-label>
                  <q-item-label class="text-grey" caption lines="1">{{
                    userStore.userState?.email
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <div class="q-pa-sm">
                <q-btn
                  class="full-width"
                  dense
                  color="default"
                  :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                  @click="$q.fullscreen.toggle()"
                  v-close-popup
                  >{{ $t('fullscreen') }}</q-btn
                >
              </div>
              <q-separator />
              <q-item clickable v-close-popup @click="logout()">
                <q-item-section>{{ $t('exit') }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="state.menu.drawer"
      show-if-above
      :mini="!state.menu.drawer || state.menu.mini"
      :width="260"
      :breakpoint="400"
      :behavior="typeScreen"
      class="border-dashed-right"
      id="drawer-layout"
    >
      <q-scroll-area class="fit">
        <q-item>
          <q-item-section avatar>
            <logo-nextfit size="md" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="font-prosto-one text-h6">NextFit</q-item-label>
          </q-item-section>
        </q-item>

        <dynamic-menu :mini-menu="state.menu.mini" :items="menuOptions" />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
  import { useUserStore } from 'src/stores/UserStore'
  import { useUserLayout } from './composables/useUserLayout'
  import LogoNextfit from 'src/components/user-interface/logo/LogoNextfit.vue'
  import { menuOptions } from './constants/menuOptions.const'
  import DynamicMenu from 'src/components/user-interface/dynamic-menu/DynamicMenu.vue'
  import { avatarPicturesDictionary } from 'src/constants/user/avatar.const'
  import { useUserAuth } from 'src/composables/useUserAuth'
  import { onBeforeMount } from 'vue'
  import { useI18n } from 'src/boot/i18n'
  import { useRoute } from 'vue-router'

  const { typeScreen, state, toggleLeftDrawer, defineTypeMenu } = useUserLayout()
  const { logout } = useUserAuth()
  const userStore = useUserStore()
  const { te } = useI18n()
  const route = useRoute()

  onBeforeMount(() => {
    defineTypeMenu()
  })
</script>
<style lang="scss">
#drawer-layout {
  border-right: 1px dashed $divider;
}
</style>
