<script setup lang="ts">
import { cn } from '@/lib/utils'

import { NavbarLink } from '.';

const links = [
  { name: 'Home', path: '/#home' },
  { name: 'About', path: '/#about' },
  { name: 'Services', path: '/#services' },
  { name: 'Contact', path: '/#contact' },
]

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  class: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <nav
    :class="
      cn('hidden col-span-full basis-full lg:col-span-1 lg:block lg:basis-auto', { 'block': props.open }, { 'hidden': !props.open })
    "
  >
    <div class="flex items-center justify-center flex-col lg:flex-end lg:flex-row">
      <NavbarLink v-for="link of links" :key="link.name" :link="link" />
    </div>
  </nav>
</template>
