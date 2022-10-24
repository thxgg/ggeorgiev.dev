<template>
  <section
    id="hero"
    class="mx-14 flex h-screen flex-col items-start justify-center p-0"
  >
    <p class="mb-4 ml-2 font-mono text-sm text-primary">
      Hi, there! My name is
    </p>
    <h1 class="text-6xl font-black leading-tight">Georgi Georgiev.</h1>
    <p class="text-5xl font-black leading-tight brightness-[.8]">
      I create apps.
    </p>
    <p class="mt-4 max-w-lg">
      I’m a software engineer specializing in building (and occasionally
      designing) software to bring ideas to life. Currently, I'm focused on
      creating and improving the products at
      <a href="https://dev-craft.com" target="_blank" class="inline-link">
        DevCraft</a
      >.
    </p>
    <div>
      <base-button link="/snippets" :disabled="true" class="mt-10">
        Check out my Snippets
      </base-button>
      <span class="ml-4 font-mono text-xs">Coming soon...</span>
    </div>
  </section>
</template>
