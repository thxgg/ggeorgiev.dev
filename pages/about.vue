<template>
  <main
    class="flex flex-grow flex-col md:flex-row justify-center gap-20 md:gap-40 mt-[5vw] mb-[10vw] py-4 px-20 w-full"
  >
    <section class="min-w-1/5 max-w-md self-center md:self-start">
      <h1 class="text-3xl font-bold text-center mb-12">Technologies</h1>
      <h2 class="text-xl font-semibold text-center mb-8">Current</h2>
      <ul class="flex flex-wrap gap-4 text-4xl justify-center">
        <li v-for="technology of currentTechnologies" :key="technology.name">
          <Icon :name="technology.icon" />
        </li>
      </ul>
      <h2 class="text-xl font-semibold text-center my-8">Experience</h2>
      <ul class="flex flex-wrap gap-4 text-4xl justify-center">
        <li v-for="technology of experienceTechnologies" :key="technology.name">
          <Icon :name="technology.icon" />
        </li>
      </ul>
    </section>
    <section
      class="min-w-2/5 max-w-md self-center md:self-start md:order-first"
    >
      <h1 class="text-3xl font-bold text-center mb-12">Work History</h1>
      <ul class="timeline space-y-16">
        <WorkEntry
          v-for="entry of workHistory"
          :key="entry.name"
          :entry="entry"
        />
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { parse } from "date-fns"

useHead({
  title: "About",
})

const workHistory = [
  {
    name: "DevCraft",
    position: "Full-stack developer",
    from: parse("Sep 2021", "MMM yyyy", new Date()),
    description:
      "Planned, designed and built an in-house law document change tracker. Planned, designed and built a team building platform. Maintained, modernized and enchanced an industry-exclusive hospitality platform.",
  },
  {
    name: "ABT bv",
    position: "Software intern",
    from: parse("May 2022", "MMM yyyy", new Date()),
    until: parse("Jun 2022", "MMM yyyy", new Date()),
    description:
      "Conceptualized, planned, designed and built a dashboard platform for owners, tenants and engineers to collaborate on maintenance of concrete floors.",
  },
]

const technologies = [
  {
    name: "Nuxt",
    icon: "logos:nuxt-icon",
    current: true,
  },
  {
    name: "Vue",
    icon: "logos:vue",
    current: true,
  },
  {
    name: "TailwindCSS",
    icon: "logos:tailwindcss-icon",
    current: true,
  },
  {
    name: "Spring",
    icon: "logos:spring-icon",
    current: true,
  },
  {
    name: "Java",
    icon: "logos:java",
    current: true,
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
    current: true,
  },
  {
    name: "Vuetify",
    icon: "logos:vuetifyjs",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Angular",
    icon: "logos:angular-icon",
  },
  {
    name: "Go",
    icon: "logos:go",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Unity",
    icon: "logos:unity",
  },
  {
    name: "C#",
    icon: "logos:c-sharp",
  },
  {
    name: "C++",
    icon: "logos:c-plusplus",
  },
  {
    name: "Scala",
    icon: "logos:scala",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Selenium",
    icon: "logos:selenium",
  },
  {
    name: "Cypress",
    icon: "logos:cypress-icon",
  },
]

const currentTechnologies = computed(() =>
  technologies.filter((technology) => technology.current),
)

const experienceTechnologies = computed(() =>
  technologies.filter((technology) => !technology.current),
)
</script>

<style scoped>
.timeline {
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  border-left: 1px solid var(--accent);
}

.timeline > * {
  position: relative;
}

.timeline > *::before {
  position: absolute;
  top: calc(50% - 0.25rem);
  left: calc(-2rem - 0.5rem);
  content: "";
  width: 1rem;
  height: 1rem;
  background-color: var(--accent);
  border-radius: 50%;
}
</style>
