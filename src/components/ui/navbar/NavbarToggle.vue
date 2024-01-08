<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    :class="cn('block lg:hidden', props.class)"
  >
    <slot />
  </div>
</template>
