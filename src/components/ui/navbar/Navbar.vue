<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    :class="cn('relative flex h-16 items-center bg-primary text-primary-foreground', props.class)"
  >
    <div :class="cn('container flex items-center justify-between')">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
