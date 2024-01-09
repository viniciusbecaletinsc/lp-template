<script setup lang="ts">
import { ref } from 'vue'

import { Navbar, NavbarLogo, NavbarToggle, NavbarMenu, NavbarLink } from '@/components/ui/navbar'

import { data } from '../constants/index'

const open = ref(false)

function handleToggle() {
  open.value = !open.value
}
</script>

<template>
  <Navbar>
    <NavbarLogo>
      <img class="max-h-8 text-white" src="../img/logo.svg" alt="" width="144px" height="32px" />
    </NavbarLogo>

    <NavbarToggle :open="open" :toggle="handleToggle" />

    <NavbarMenu :open="open" :toggle="handleToggle">
      <NavbarLink v-for="link of data.links.navbar" :key="link.name" :link="link" />
    </NavbarMenu>
  </Navbar>
</template>
