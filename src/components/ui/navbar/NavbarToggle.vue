<script setup lang="ts">
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  toggle: {
    type: Function,
    required: true
  },
  open: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <Button
    :class="cn('lg:hidden', props.class)"
    type="button"
    variant="ghost"
    size="icon"
    @action="props.toggle"
  >
    <span
      :class="
        cn(
          'relative mt-2 w-5 before:absolute before:-top-2 before:left-0 before:h-[2px] before:w-5 before:bg-primary-foreground before:transition-all before:content-[\'\'] after:absolute after:-top-0 after:left-0 after:h-[2px] after:w-5 after:bg-primary-foreground after:transition-all after:content-[\'\']',
          {
            'before:-top-[4px] before:rotate-[135deg] after:-top-[4px] after:-rotate-[135deg]':
              props.open
          }
        )
      "
    >
    </span>
  </Button>
</template>
