<template>
  <li>
    <h2 class="text-lg font-semibold">
      {{ entry.name }} <span class="ml-2 opacity-50">{{ entry.position }}</span>
    </h2>
    <h3 class="text-sm opacity-70">
      {{
        `${format(entry.from, "MMM yyyy")} - ${
          entry.until ? format(entry.until, "MMM yyyy") : "present"
        }`
      }}
    </h3>
    <p class="mt-2">{{ entry.description }}</p>
  </li>
</template>

<script setup lang="ts">
import { format } from "date-fns"

defineProps<{
  entry: {
    name: string
    position: string
    from: Date
    until?: Date
    description: string
  }
}>()
</script>
