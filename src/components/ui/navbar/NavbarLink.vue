<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  link: {
    name: string
    path: string
  }
}

const props = defineProps<Props>()

defineEmits(['action'])
</script>

<template>
  <a
    :class="cn('block w-full rounded-none px-4 py-2 hover:bg-[rgba(0,0,0,0.2)] lg:rounded-sm')"
    :href="props.link.path"
    @click.prevent="$emit('action', props.link.path)"
    >{{ link.name }}</a
  >
</template>

<style scoped></style>
