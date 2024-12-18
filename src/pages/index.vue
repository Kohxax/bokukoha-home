<template>
  <v-main class="mt-60">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" md="12" lg="8" xl="6">
          <v-sheet class="d-flex flex-column align-center rounded-lg" :elevation="4" min-height="150vh" max-width="1000" rounded>
            <v-card class="mt-2" max-width="400">
              <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover>
                <v-card-title>test</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                Number 10
              </v-card-subtitle>

              <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
            </v-card>
          </v-sheet>
        </v-col>

        <v-col cols="12" lg="3" xl="2" class="order-last order-md-last">
          <v-sheet class="d-flex flex-column align-center rounded-lg" :elevation="4" rounded>
            <v-avatar class="mt-2" size="220" image="@/assets/bokukoha_icon.jpg"></v-avatar>

            <div class="d-flex justify-center">
              <a v-for="item in links" :key="item.title" :href="item.href" :title="item.title" rel="noopener noreferrer"
                target="_blank">
                <v-btn class="mx-2" variant="plain" :size="item.size" :icon="item.icon"></v-btn>
              </a>
            </div>
          </v-sheet>
        </v-col>
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
  },
  {
    title: 'Github',
    icon: GitHubIcon,
    href: 'https://github.com/Kohxax',
    size: 45,
  },
  {
    title: 'X',
    icon: XIcon,
    href: 'https://x.com/Kohxax',
    size: 45,
  }
]

</script>

<style lang="css" scoped>
.mt-60 {
  margin-top: 60px;
}
</style>