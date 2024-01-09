<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

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

function handleScrollToSection(event: Event) {
  event.preventDefault()

  const target = event.currentTarget as HTMLAnchorElement
  const href = target.getAttribute('href')?.replace('/', '')!
  const section = document.querySelector(href)!

  section.scrollIntoView({
    behavior: 'smooth'
  })

  if (props.open) {
    props.toggle()
  }
}

onMounted(() => {
  const links = document.querySelectorAll('nav > a[href^="/#"]')

  for (const link of links) {
    link.addEventListener('click', handleScrollToSection)
  }
})

onUnmounted(() => {
  const links = document.querySelectorAll('nav > a[href^="/#"]')

  for (const link of links) {
    link.removeEventListener('click', handleScrollToSection)
  }
})
</script>

<template>
  <nav
    :class="
      cn(
        'invisible absolute left-0 right-0 top-16 z-50 h-0 w-full overflow-y-hidden bg-primary transition-all duration-300 lg:visible lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row',
        {
          'visible flex h-[calc(100vh-64px)] flex-col': props.open
        },
        props.class
      )
    "
  >
    <slot />
  </nav>
</template>
