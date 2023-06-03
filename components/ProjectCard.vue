<template>
  <article
    class="project-card h-full cursor-pointer rounded bg-background-bright p-6 shadow-md hover:shadow-lg"
  >
    <header class="mb-6 flex items-center justify-between">
      <Icon name="bx:folder" class="text-4xl text-primary" />
      <div class="inline-flex space-x-4 text-xl">
        <a
          v-if="project.source"
          :href="project.source"
          target="_blank"
          class="hover:text-primary"
        >
          <Icon name="bxl:github" />
        </a>
        <a :href="project.live" class="hover:text-primary" target="_blank">
          <Icon name="bx:link-external" />
        </a>
      </div>
    </header>
    <main>
      <h4 class="mb-2 text-lg font-extrabold">
        {{ project.name }}
      </h4>
      <p class="text-sm tracking-tight">
        {{ project.description }}
      </p>
    </main>
    <footer>
      <ul
        class="invisible-scroll mt-4 space-x-4 overflow-scroll font-mono text-[0.7rem] font-thin text-foreground-dim"
      >
        <li
          v-for="(technology, index) of project.technologies"
          :key="index"
          class="inline"
        >
          {{ technology }}
        </li>
      </ul>
    </footer>
  </article>
</template>

<script setup lang="ts">
defineProps<{
    project: {
      name: string,
      description: string,
      technologies: Array<string>,
      source?: string,
      live: string
    }
  }>()
</script>
