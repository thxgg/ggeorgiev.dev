<template>
  <header
    class="fixed top-0 left-0 z-20 flex h-24 w-full items-center justify-between bg-background bg-opacity-80 px-12 font-mono text-xs backdrop-blur"
  >
    <a href="/">
      <img src="/logo.svg" alt="logo" class="hover-bounce w-8" />
    </a>
    <nav class="space-x-8">
      <a
        v-for="(link, index) of links"
        :href="link.link"
        class="font-medium tracking-tighter hover:text-primary"
      >
        <span class="text-primary">
          {{ index + 1 < 10 ? `0${index + 1}` : index + 1 }}.</span
        >
        {{ link.name }}
      </a>
      <base-button link="/resume.pdf">Resume</base-button>
    </nav>
  </header>
</template>

<script setup>
const links = [
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Experience",
    link: "/#experience",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];
</script>
