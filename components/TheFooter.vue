<template>
  <footer class="relative text-center mx-auto px-4 py-2 max-w-[50rem]">
    <small>
      2022-{{ year }} &copy; Georgi Georgiev
      <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
        CC BY-SA 4.0
      </a>
    </small>
    <ul class="flex flex-row justify-center gap-4 my-4 items-center text-2xl">
      <li
        v-for="{ link, name, icon } in links"
        :key="name"
        class="inline-flex items-center"
      >
        <a :href="link" rel="me" target="_blank">
          <Icon :name="icon" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "GitHub",
    icon: "bxl:github",
    link: "https://github.com/thxgg/",
  },
  {
    name: "LinkedIn",
    icon: "bxl:linkedin-square",
    link: "https://www.linkedin.com/in/thxgg/",
  },
  {
    name: "Discord",
    link: "https://discord.com/users/thxgg",
    icon: "bxl:discord-alt",
  },
  {
    name: "Email",
    link: "mailto:gatanasovgeorgiev@gmail.com",
    icon: "bxl:gmail",
  },
]

const year = new Date().getFullYear()
</script>
