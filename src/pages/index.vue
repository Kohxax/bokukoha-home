<template>


  <v-main>
    <v-container>
      <v-row class="mt-100">
        <v-sheet class="mx-auto text-center" width="500px" :elevation="4" rounded>
          <v-col>
            <v-avatar size="220" image="@/assets/bokukoha_icon.jpg"></v-avatar>
          </v-col>

          <v-col>
            <a class="social-link" v-for="item in links" :key="item.title" :href="item.href" :title="item.title"
              rel="noopener noreferrer" target="_blank">
              <v-icon class="mx-2 my-2" :color="item.color" :size="item.size" :icon="item.icon"></v-icon>
            </a>
          </v-col>
        </v-sheet>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import MisskeyIcon from "@/components/icons/MisskeyIcon.vue";
import XIcon from "@/components/icons/XIcon.vue";
import GitHubIcon from "@/components/icons/GithubIcon.vue";

const links = [
  {
    title: 'Misskey.io',
    icon: MisskeyIcon,
    href: 'https://misskey.io/@bokukoha',
    size: 45,
    color: "white"
  },
  {
    title: 'Github',
    icon: GitHubIcon,
    href: 'https://github.com/Kohxax',
    size: 45,
    color: "white"
  },
  {
    title: 'X',
    icon: XIcon,
    href: 'https://x.com/Kohxax',
    size: 45,
    color: "white"
  },
  {
    title: "test",
    icon: "mdi-home",
    href: "https://map.bokukoha.dev",
    size: 45,
    color: "white"
  }
]
</script>

<style lang="css" scoped>
.mt-100 {
  margin-top: 100px;
}
</style>