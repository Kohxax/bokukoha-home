<template>
    <v-app-bar class="position-sticky" :elevation="4">
        <v-container fluid>
            <v-row>
                <v-col class="mx-auto d-flex justify-space-between align-center" xs="11" sm="11" md="10" lg="9">
                    <v-btn class="justify-center" @click="Home" fab icon>
                        <v-avatar image="@/assets/bokukoha_icon.jpg" size="42"></v-avatar>
                    </v-btn>

                    <div class="d-flex">
                        <a class="justify-end" v-for="item in links" :key="item.title" :href="item.href"
                            :title="item.title" rel="noopener noreferrer" target="_blank">
                            <v-btn variant="plain" :size="item.size" :icon="item.icon"></v-btn>
                        </a>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script lang="ts" setup>
import MisskeyIcon from "@/components/icons/MisskeyIcon.vue";
import XIcon from "@/components/icons/XIcon.vue";
import GitHubIcon from "@/components/icons/GithubIcon.vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const Home = () => {
    router.push('/')
}

const links = [
    {
        title: 'Misskey.io',
        icon: MisskeyIcon,
        href: 'https://misskey.io/@bokukoha',
        size: 40,
    },
    {
        title: 'Github',
        icon: GitHubIcon,
        href: 'https://github.com/Kohxax',
        size: 40,
    },
    {
        title: 'X',
        icon: XIcon,
        href: 'https://x.com/Kohxax',
        size: 40,
    }
]
</script>