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
    :class="
      cn('py-4 grid grid-cols-[1fr_auto] items-center justify-between gap-4',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

<style scoped>

</style>
