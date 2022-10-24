<template>
  <section id="experience" class="max-w-[700px]">
    <h2 class="mt-2 mb-8 flex items-center text-2xl">
      <span class="mr-2 font-mono text-base text-primary">02.</span>
      <span class="font-black capitalize">My work experience</span>
    </h2>
    <div class="grid grid-cols-[1fr_3fr]">
      <!-- TODO: Use tabs component -->
      <div class="flex items-center justify-center">
        <span style="writing-mode: vertical-rl" class="rotate-180">
          Coming soon...
        </span>
      </div>
      <div v-for="experience of experiences">
        <h3 class="mb-1 font-semibold">
          <span class="capitalize">{{ experience.position }}</span>
          <span class="text-primary">
            @
            <a
              :href="experience.link"
              target="_blank"
              class="inline-link font-semibold"
            >
              {{ experience.company }}
            </a>
          </span>
        </h3>
        <h4 class="mb-4 font-mono text-xs">{{ experience.duration }}</h4>
        <ul class="inline-list space-y-2 text-sm">
          <li v-for="note of experience.notes">{{ note }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    company: "DevCraft",
    link: "https://dev-craft.com",
    position: "Full-stack developer",
    duration: "September 2021 - Present",
    notes: [
      "Write modern, performant, and maintainable code for clients and internal projects.",
      "Engineer a platform for creating and running team-building games.",
      "Utilize a variety of languages, frameworks, and tools including: Vue, Spring Boot, PostgreSQL, Heroku.",
    ],
  },
];
</script>
