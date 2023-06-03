<template>
  <header
    class="fixed top-0 left-0 z-20 flex h-24 w-full items-center justify-between bg-background bg-opacity-80 px-12 font-mono text-xs backdrop-blur"
  >
    <nuxt-link href="/">
      <img src="/logo.svg" alt="logo" class="hover-bounce w-8">
    </nuxt-link>
    <nav class="space-x-8">
      <nuxt-link
        v-for="(link, index) of links"
        :key="index"
        :to="{ path: link.path, hash: link.hash }"
        class="font-medium tracking-tighter hover:text-primary"
      >
        <span class="text-primary">
          {{ index + 1 < 10 ? `0${index + 1}` : index + 1 }}.</span>
        {{ link.name }}
      </nuxt-link>
      <base-button :external="true" link="/resume.pdf">
        Resume
      </base-button>
    </nav>
  </header>
</template>

<script setup lang="ts">
const links = [
  {
    name: 'About',
    path: '/',
    hash: '#about'
  },
  {
    name: 'Experience',
    path: '/',
    hash: '#experience'
  },
  {
    name: 'Projects',
    path: '/',
    hash: '#projects'
  },
  {
    name: 'Contact',
    path: '/',
    hash: '#contact'
  }
]
</script>
