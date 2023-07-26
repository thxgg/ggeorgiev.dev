<template>
  <article
    class="border-2 p-4 border-slate-900/30 shadow-lg hover:border-primary flex flex-col gap-6"
  >
    <div class="flex justify-between">
      <h2 class="text-2xl">{{ project.name }}</h2>
      <div
        class="uppercase text-xs border-l-2 border-accent pl-3 flex justify-center items-center"
      >
        {{ project.type }}
      </div>
    </div>
    <p class="opacity-60">{{ project.description }}</p>
    <div class="flex justify-center gap-4 text-lg">
      <a
        v-if="project.repository"
        :href="project.repository"
        class="hover:opacity-80"
      >
        source
      </a>
      <a v-if="project.live" :href="project.live" class="hover:opacity-80">
        live
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    name: string
    description: string
    repository?: string
    live?: string
    type: string
  }
}>()
</script>
