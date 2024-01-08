<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import LogoImage from '@/assets/logo.svg'

import { Navbar, NavbarLogo, NavbarToggle, NavbarMenu } from '@/components/ui/navbar'
import { Button } from '@/components/ui/button'

const open = ref(false)

function handleToggle() {
  open.value = !open.value
}
</script>

<template>
  <header class="bg-primary text-primary-foreground">
    <div class="container">
      <Navbar>
        <NavbarLogo>
          <img class="max-h-8 text-white" :src="LogoImage" alt="" width="144px" height="32px" />
        </NavbarLogo>

        <NavbarToggle>
          <Button type="button" variant="ghost" size="icon" @action="handleToggle">
            <span
              :class="
                cn(
                  'relative mt-2 before:absolute before:-top-2 before:left-0 before:h-[2px] before:w-5 before:bg-primary-foreground before:transition-all before:content-[\'\'] after:absolute after:-top-0 after:left-0 after:h-[2px] after:w-5 after:bg-primary-foreground after:transition-all after:content-[\'\']',
                  {
                    'before:-top-[4px] before:rotate-[135deg] after:-top-[4px] after:-rotate-[135deg]':
                      open
                  }
                )
              "
            >
            </span>
          </Button>
        </NavbarToggle>

        <NavbarMenu :open="open" />
      </Navbar>
    </div>
  </header>
</template>
