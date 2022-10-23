<template>
  <a
    :href="disabled ? null : link"
    class="inline-flex place-content-center rounded border border-primary py-2 px-4 font-sans font-medium text-primary hover:bg-primary/10"
    :class="disabled ? 'disabled' : ''"
  >
    <slot> Click</slot>
  </a>
</template>

<script setup>
defineProps(["link", "disabled"]);
</script>
