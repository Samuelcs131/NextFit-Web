<template>
  <q-page padding class="container">
    {{ userStore.user }}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea a quam
    quidem id fuga ipsam incidunt nihil officia? Facere incidunt ea ullam
    consectetur veniam, nesciunt ad id. Quisquam, iure! Lorem ipsum, dolor sit
    amet consectetur adipisicing elit. Quam maxime inventore maiores beatae
    ullam alias. Minima iste iure nostrum laborum, molestiae, autem unde
    accusamus mollitia, dolor voluptas odit iusto voluptatibus? Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Consectetur eos, quod
    perferendis iusto sint nam modi aperiam excepturi? Facilis vero quasi
    commodi, mollitia sit deleniti quidem quos eos consectetur nemo. Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sint
    quaerat, culpa enim molestiae earum deleniti? Voluptatibus laborum, optio
    hic distinctio accusamus minima explicabo repellat facilis aliquid veniam
    cumque quos!
  </q-page>
</template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/UserStore'

const userStore = useUserStore()
</script>
<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 1400px;
}
</style>
