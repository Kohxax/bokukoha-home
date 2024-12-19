<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="12" lg="8" xl="6">
        <v-sheet class="d-flex flex-column text-center rounded-lg" :elevation="4" min-height="150vh" max-width="1000"
          rounded>
          <h1>Blog Post here(WIP)</h1>
        </v-sheet>
      </v-col>

      <v-col cols="12" lg="4" xl="3" class="order-last order-md-last">
        <v-sheet class="d-flex flex-column align-center rounded-lg" :elevation="4" rounded>
          <v-avatar class="mt-2" size="200" image="@/assets/bokukoha_icon.jpg"></v-avatar>
          <div class="mx-5 my-3 text-center">
            <p class="text-h5 font-weight-bold">こは / Koha</p>
            <p class="mt-3">自宅サーバー初心者です。</p>
            <p class="mt-3">Java, Vue, Ubuntuあたりをゆるーく触ってます。</p>
            <p class="mt-3">PCゲーム、エロゲー、散歩が好きです。</p>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
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
h1,
p,
v-avatar {
  user-select: none;
}
</style>