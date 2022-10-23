<template>
  <div class="social-links fixed bottom-0 left-10 flex flex-col">
    <a
      v-for="social of socials"
      :href="social.link"
      class="p-3 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:text-primary"
    >
      <Icon :name="social.icon" size="1.5rem" />
    </a>
  </div>
  <div
    class="social-links fixed bottom-0 right-10 flex flex-col font-mono text-xs font-thin"
  >
    <a
      href="mailto:gatanasovgeorgiev@gmail.com"
      class="p-3 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:text-primary"
      style="writing-mode: vertical-rl"
    >
      gatanasovgeorgiev@gmail.com
    </a>
  </div>
</template>

<script setup>
const socials = [
  {
    name: "GitHub",
    link: "https://github.com/lol-iris",
    icon: "bxl:github",
  },
  {
    name: "Discord",
    link: "https://discord.com/users/108266380515622912",
    icon: "bxl:discord-alt",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/lol_iris1",
    icon: "bxl:twitter",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/georgiageorgiev/",
    icon: "bxl:linkedin",
  },
  { name: "CodePen", link: "https://codepen.io/lol-iris", icon: "bxl:codepen" },
];
</script>
