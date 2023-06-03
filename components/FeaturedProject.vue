<template>
  <article class="grid h-72 grid-cols-12 grid-rows-1">
    <div
      class="primary-overlay row-start-1 row-end-1 flex"
      :style="`grid-column-start: ${alt ? 6 : 1}; grid-column-end: ${
        alt ? -1 : 8
      }`"
    >
      <a :href="project.live" target="_blank">
        <img
          :src="project.thumbnail"
          :alt="`${project.name} Thumbnail`"
          class="h-full w-full rounded object-cover object-top"
        >
      </a>
    </div>
    <div
      class="z-10 row-start-1 row-end-1 flex flex-col justify-center"
      :style="`grid-column-start: ${alt ? 1 : 7}; grid-column-end: ${
        alt ? 8 : -1
      }; text-align: ${alt ? 'left' : 'right'}`"
    >
      <p class="my-1 font-mono text-xs capitalize text-primary">
        Featured project
      </p>
      <h3 class="mb-4 text-xl font-extrabold">
        {{ project.name }}
      </h3>
      <p
        class="rounded bg-background-bright p-6 text-sm shadow"
        :class="[`text-${alt ? 'end' : 'start'}`]"
      >
        {{ project.description }}
      </p>
      <ul
        class="my-4 space-x-4 font-mono text-xs font-light text-foreground-dim"
      >
        <li
          v-for="(technology, index) in project.technologies"
          :key="index"
          class="inline"
        >
          {{ technology }}
        </li>
      </ul>
      <div class="space-x-4 text-lg">
        <a
          v-if="project.source"
          :href="project.source"
          target="_blank"
          class="hover:text-primary"
        >
          <Icon name="bxl:github" />
        </a>
        <a :href="project.live" target="_blank" class="hover:text-primary">
          <Icon name="bx:link-external" />
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
    project: {
      name: string,
      description: string,
      thumbnail: string,
      technologies: Array<string>,
      source?: string,
      live: string
    },
    alt: Boolean
  }>()
</script>
