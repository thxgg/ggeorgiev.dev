<template>
  <button
    aria-label="Change site theme"
    type="button"
    @click="
      colorMode.value == 'dark'
        ? (colorMode.preference = 'light')
        : (colorMode.preference = 'dark')
    "
  >
    <Icon
      name="mdi:theme-light-dark"
      class="transition"
      :class="{ 'rotate-180': colorMode.value == 'light' }"
    />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>
