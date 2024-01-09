<script setup lang="ts">
import { cn } from '@/lib/utils'
import { onMounted, onUnmounted, onUpdated } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  open: {
    type: Boolean,
    required: true
  }
})

function handleScroll(event: WheelEvent) {
  if (!props.open) {
    const navbar = document.querySelector('[data-navbar="container"]') as HTMLDivElement

    const delta = event.deltaY

    if (delta > 0) {
      const scroll = window.scrollY

      if (scroll > 100) {
        navbar.style.transform = 'translateY(-64px)'
      }
    } else {
      navbar.style.transform = 'translateY(0)'
    }
  }
}

onUpdated(() => {
  if (props.open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

onMounted(() => {
  window.addEventListener('wheel', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll)
})
</script>

<template>
  <div
    data-navbar="container"
    :class="
      cn(
        'fixed left-0 right-0 top-0 flex h-16 items-center bg-primary text-primary-foreground transition-[transform] duration-300 ',
        props.class
      )
    "
  >
    <div :class="cn('container flex items-center justify-between')">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
