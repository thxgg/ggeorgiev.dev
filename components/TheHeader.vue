<template>
  <nav class="flex w-full items-center justify-between py-4 px-6 text-xl">
    <div class="md:hidden flex flex-col gap-4">
      <button class="w-fit" @click="showNav = !showNav">
        <Icon :name="showNav ? 'octicon:x-16' : 'octicon:three-bars-16'" />
      </button>
      <template v-if="showNav">
        <NuxtLink
          v-for="{ name, path } of links"
          :key="name"
          :to="path"
          class="underlined-link w-fit"
          @click="showNav = false"
        >
          {{ name }}
        </NuxtLink>
      </template>
    </div>
    <div class="space-x-4 hidden md:block">
      <template v-for="{ name, path } of links" :key="name">
        <NuxtLink :to="path" class="underlined-link">
          {{ name }}
        </NuxtLink>
        <span>&times;</span>
      </template>
      <a href="/resume.pdf" target="_blank" class="underlined-link">Resumé</a>
    </div>
    <div class="space-x-4 self-start">
      <ColorModeSwitch class="text-2xl hover:opacity-80" />
    </div>
  </nav>
</template>

<script setup lang="ts">
const links = [
  {
    name: "GG",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Lab",
    path: "/lab",
  },
]

const showNav = ref(false)
</script>
