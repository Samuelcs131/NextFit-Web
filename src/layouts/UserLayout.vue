<template>
  <q-layout view="lhh lpR lFf">
    <q-header class="bg-background text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Title page </q-toolbar-title>

        <q-item :clickable="false">
          <q-btn round color="white">
            <q-avatar size="38px">
              <img :src="ProfileMale" />
            </q-avatar>
          </q-btn>
          <q-menu class="bg-b-grey-1 text-white">
            <div class="row no-wrap q-pa-md">
              <div class="column items-center width-full">
                <q-avatar size="72px" class="shadow-1">
                  <img :src="ProfileMale" />
                </q-avatar>

                <p class="text-subtitle2 text-center q-mt-md q-mb-xs width-full">
                   Samuel Silva
                </p>

                <q-btn
                  color="primary"
                  label="Sair"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-menu>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      behavior="default"
      class="bg-b-grey-1 text-white"
    >
      <q-list>
        <q-item :clickable="false" class="text-h6 text-white flex items-center">
          <q-avatar size="2.5rem" class="q-mr-md">
            <img :src="NextFitLogo" />
          </q-avatar>
          <span>NextFit</span>
        </q-item>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-background text-white">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import EssentialLink, {
  EssentialLinkProps
} from 'components/EssentialLink.vue'
import NextFitLogo from 'src/assets/img/logo/nextfit_logo.svg'
import ProfileMale from 'src/assets/img/avatar/avatar_male.svg'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'DashBoard',
    icon: 'bar_chart',
    link: '/'
  },
  {
    title: 'Atividades',
    icon: 'bolt',
    link: '/ativities'
  },
  {
    title: 'Perfil',
    icon: 'person',
    link: '/ativities'
  },
  {
    title: 'Definições',
    icon: 'settings',
    link: '/ativities'
  }
]
</script>
<style lang="scss">
.menu-bar {
  background-color: $b-grey-1;
}

.menu-bar {
  background-color: $b-grey-1;
}
</style>
