<template>
  <article class="divide-y-2 divide-current border-2 border-current">
    <!-- Title bar -->
    <div class="flex flex-row justify-between p-2">
      <div class="flex flex-1 items-center">
        <Icon v-for="index in 3" :key="index" name="pixelarticons:circle" />
      </div>
      <h2 class="text-xl">{{ project.name }}</h2>
      <div class="flex-1"></div>
    </div>
    <!-- Thumbnail -->
    <div>
      <img
        v-if="project.thumbnail"
        :src="project.thumbnail"
        :alt="`${project.name} thumbnail`"
        class="aspect-video w-full object-cover object-top"
      />
      <img
        v-else
        :src="`https://via.placeholder.com/400x225?text=${project.name.replaceAll(
          ' ',
          '+'
        )}`"
        alt="Placeholder
      thumbnail"
        class="aspect-video w-full object-cover object-top"
      />
    </div>
    <!-- Description -->
    <div class="p-4">
      <p>{{ project.description }}</p>
    </div>
    <!-- Links -->
    <div
      v-if="project.source || project.live"
      class="flex divide-x-2 divide-current"
    >
      <!-- Source -->
      <a
        v-if="project.source"
        :href="project.source"
        target="_blank"
        class="flex flex-grow items-center justify-center gap-1 p-1 hover:bg-foreground hover:text-background dark:hover:bg-background dark:hover:text-foreground"
        ref="source"
      >
        Source
        <Icon name="bx:link-external" />
      </a>
      <!-- Live -->
      <a
        v-if="project.live"
        :href="project.live"
        target="_blank"
        class="flex flex-grow items-center justify-center gap-1 p-1 hover:bg-foreground hover:text-background dark:hover:bg-background dark:hover:text-foreground"
      >
        Live
        <Icon name="bx:link-external" />
      </a>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
