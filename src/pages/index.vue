<template>

  <v-main>

    <v-sheet class="mx-auto text-center" :elevation="4" :width="600" rounded>
      <div class="mt-avatar">
        <v-avatar class="mt-3" size="220" image="@/assets/bokukoha_icon.jpg"></v-avatar>
      </div>

      <v-container class="mt-1">
        <v-row>
          <v-col align="center" justify="center">
            <div>
              <a v-for="item in links" :key="item.title" :href="item.href" :title="item.title" rel="noopener noreferrer"
                target="_blank">
                <v-icon class="mr-2 ml-2" :color="item.color" :size="item.size" :icon="item.icon"></v-icon>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-main>
</template>

<script lang="ts" setup>
import ViteIcon from "@/components/icons/ViteIcon.vue";
import XIcon from "@/components/icons/XIcon.vue";
import GitHubIcon from "@/components/icons/GithubIcon.vue";

const links = [
  {
    title: 'Misskey.io',
    icon: ViteIcon,
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
  }
]
</script>

<style lang="css" scoped>
.mt-avatar {
  margin-top: 100px;
}
</style>
