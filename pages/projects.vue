<template>
  <main
    class="flex flex-wrap flex-col md:flex-row flex-grow items-center justify-start md:justify-center gap-12 gap-y-12 py-4 px-20 mt-[5vw]"
  >
    <ProjectCard
      v-for="project in projects"
      :key="project.name"
      :project="project"
    />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Projects",
})

const projects = [
  {
    name: "Vuerdle",
    description: "Wordle clone written in Vue 3",
    repository: "https://github.com/thxgg/vuerdle",
    live: "https://thxgg.github.io/vuerdle/",
    type: "personal",
  },
  {
    name: "Portfolio",
    description: "My personal portfolio website",
    repository: "https://github.com/thxgg/ggeorgiev.dev",
    live: "https://thxgg.dev/",
    type: "personal",
  },
]
</script>
