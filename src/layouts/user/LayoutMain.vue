<template>
  <q-layout view="lHh LpR fff">
    <q-header class="header-layout-main">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> {{ $t(`common.${namePage}`) }} </q-toolbar-title>

        <q-space />

        <q-item :clickable="false">
          <q-btn round unelevated>
            <q-avatar size="38px">
              <q-img
                :src="getAvatar(userStore.user?.avatar).img"
                :alt="getAvatar(userStore.user?.avatar).name"
              />
            </q-avatar>
          </q-btn>
          <q-menu class="" v-bind="$vMenu">
            <q-list style="min-width: 150px" dense>
              <q-item class="q-my-xs non-selectable">
                <q-item-section>
                  <q-item-label>{{ userStore.user?.name }}</q-item-label>
                  <q-item-label class="text-grey" caption lines="1">{{
                    userStore.user?.email
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup @click="logout">
                <q-item-section>{{ $t('ui.exit') }}</q-item-section>
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
      @dblclick="state.menu.mini = !state.menu.mini"
      :width="200"
      :breakpoint="400"
      :behavior="typeScreen"
      class="bg-page"
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

        <items-menu :items="optionsMenu" />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <NextFitLoading :loader-id="userLayoutLoader.isLoggedIn" />
  </q-layout>
</template>

<script lang="ts" setup>
import { useUserStore } from 'src/stores/UserStore'
import { optionsMenu } from './constants/optionsMenu'
import { useUserLayout } from './composables/useUserLayout'
import { userLayoutLoader } from './enums/userLayoutLoaders.enum'
import { getAvatar } from 'src/utils/avatar/avatar'
import NextFitLoading from 'src/components/user-interface/loading-templates/NextFitLoading.vue'
import ItemsMenu from './components/items-menu/ItemsMenu.vue'
import LogoNextfit from 'src/components/user-interface/logo/LogoNextfit.vue'

const {
  namePage,
  typeScreen,
  state,
  checkILoggedIn,
  toggleLeftDrawer,
  defineTypeMenu,
  logout,
} = useUserLayout()

// checkILoggedIn(userLayoutLoader.isLoggedIn)
defineTypeMenu()

const userStore = useUserStore()
</script>
