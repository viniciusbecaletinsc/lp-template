<script setup lang="ts">
import { cn } from '@/lib/utils'

import { NavbarLink } from '.'

const links = [
  { name: 'Home', path: '/#home' },
  { name: 'About', path: '/#about' },
  { name: 'Services', path: '/#services' },
  { name: 'Contact', path: '/#contact' }
]

const props = defineProps({
  open: {
    type: Boolean,
    required: true
  },
  class: {
    type: String,
    required: false
  },
  toggle: {
    type: Function,
    required: true
  }
})

function handleScrollToSection(id: string) {
  const section = document.querySelector(id.replace('/', ''))!

  section.scrollIntoView({
    behavior: 'smooth'
  })

  if (props.open) {
    props.toggle()
  }
}
</script>

<template>
  <nav
    :class="
      cn(
        'invisible absolute left-0 right-0 top-16 z-50 h-0 w-full overflow-y-hidden bg-primary transition-all duration-300 lg:visible lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row',
        {
          'visible flex h-[calc(100vh-64px)] flex-col': props.open
        }
      )
    "
  >
    <NavbarLink
      v-for="link of links"
      :key="link.name"
      :link="link"
      @action="handleScrollToSection"
    />
  </nav>
</template>
