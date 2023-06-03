<template>
  <section id="projects">
    <h2 class="heading-line mt-2 mb-8 flex items-center text-2xl">
      <span class="mr-2 font-mono text-base text-primary">03.</span>
      <span class="font-black">Projects I've built</span>
    </h2>
    <div class="space-y-20">
      <featured-project
        v-for="(project, index) of featuredProjects"
        :key="index"
        :project="project"
        :alt="!!(index % 2)"
      />
    </div>
    <div
      v-if="otherProjects.length > 0"
      class="mt-40 flex flex-col items-center"
    >
      <h3
        class="mt-2 mb-4 flex items-center text-2xl font-extrabold capitalize"
      >
        Other projects
      </h3>
      <nuxt-link class="inline-link font-mono text-xs" href="/archive">
        view the archive
      </nuxt-link>
      <div class="mt-10 grid grid-cols-[repeat(3,_minmax(300px,_1fr))] gap-4">
        <project-card
          v-for="project of otherProjects.slice(
            0,
            showMore ? otherProjects.length : 6
          )"
          :key="project.name"
          :project="project"
        />
      </div>
      <base-button
        v-if="otherProjects.length > 6"
        class="mt-8"
        @click="showMore = !showMore"
      >
        <span class="px-2 py-1 font-mono text-sm font-light">{{
          `Show ${showMore ? "Less" : "More"}`
        }}</span>
      </base-button>
    </div>
  </section>
</template>

<script setup lang="ts">
const featuredProjects = [
  {
    name: 'ggeorgiev.dev',
    description:
        'This very website. Built it with Nuxt 3 and Tailwind to learn more about meta frameworks and building designs from scratch.',
    thumbnail: '/ggeorgiev.dev.png',
    technologies: ['Nuxt', 'Tailwind', 'TypeScript'],
    source: 'https://github.com/lol-iris/ggeorgiev.dev',
    live: 'https://ggeorgiev.dev/'
  },
  {
    name: 'Vuerdle',
    description:
        'A clone of the popular New York Times online game Wordle. Created this as a way to learn Vue 3 and have a the ability to play more than once a day.',
    thumbnail: '/vuerdle.png',
    technologies: ['Vue', 'TypeScript'],
    source: 'https://github.com/lol-iris/vuerdle',
    live: 'https://lol-iris.github.io/vuerdle/'
  }
]

const otherProjects = []

const showMore = ref(false)
</script>
