<template>
  <div id="app" class="overflow-x-hidden min-h-screen flex flex-col">
    <TheHeader v-once />
    <NuxtPage />
    <TheFooter v-once />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

useHead({
  title: () => (route.meta.title as string) || "",
  titleTemplate: (title) =>
    title ? `${title} · Georgi Georgiev` : "Georgi Georgiev",
  bodyAttrs: {
    class: "font-sans",
  },
})
</script>
