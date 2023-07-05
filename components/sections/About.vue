<template>
  <section id="about" class="max-w-[900px]">
    <h2 class="heading-line mt-2 mb-8 flex items-center text-2xl">
      <span class="mr-2 font-mono text-base text-primary">01.</span>
      <span class="font-black">About Me</span>
    </h2>
    <div class="grid grid-cols-[3fr_2fr] gap-12">
      <div class="space-y-4">
        <p>
          Hello! My name is Georgi and I love creating stuff - be it for work or
          fun. My programming journey started when I was 12 years old with
          algorithm competitions and slowly evolved into a more general interest
          in technology and software.
        </p>
        <p>
          Now as a grown-up, I am finishing my bachelor's degree at
          <a href="https://tudelft.nl" target="_blank" class="inline-link">
            TU Delft</a>
          and expanding my skills into areas like design, accessibility, DevOps
          and more. Enjoying the journey to a more complete developer.
        </p>
        <p>My current technology stack consists of:</p>
        <ul
          class="inline-list text-thin grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-1 font-mono text-xs text-foreground-dim"
        >
          <li>JavaScript (ES6+)</li>
          <li>Java</li>
          <li>Vue</li>
          <li>Spring Boot</li>
          <li>Heroku</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <div class="backdrop-diamond h-60 w-60">
        <div class="primary-overlay h-full w-full">
          <img
            src="/me.jpg"
            alt="Me"
            class="h-full w-full rounded object-cover object-center"
          >
        </div>
      </div>
    </div>
  </section>
</template>
