<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  link: {
    name: string
    path: string
  }
}

const props = defineProps<Props>()

const { link } = props
</script>

<template>
  <a
    :class="
      cn('block w-full px-4 py-2 text-center hover:bg-[rgba(0,0,0,0.2)] sm:text-left lg:hover:bg-transparent')
    "
    :href="link.path"
  >{{ link.name }}</a>
</template>

<style scoped>

</style>
