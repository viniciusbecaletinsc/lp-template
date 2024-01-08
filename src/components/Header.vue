<script setup lang="ts">
import { ref } from 'vue'
import LogoImage from '@/assets/logo.svg'

import { Navbar, NavbarLogo, NavbarToggle, NavbarMenu } from '@/components/ui/navbar'

const open = ref(false)

function handleToggle() {
  open.value = !open.value
}
</script>

<template>
  <Navbar>
    <NavbarLogo>
      <img class="max-h-8 text-white" :src="LogoImage" alt="" width="144px" height="32px" />
    </NavbarLogo>

    <NavbarToggle :open="open" :toggle="handleToggle" />

    <NavbarMenu :open="open" />
  </Navbar>
</template>
