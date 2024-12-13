<template>
    <v-footer app class="bg-background text-white">
        <v-row>
            <v-col class="mx-auto text-center d-flex flex-column" cols="12">
                <p>Powered by</p>
                <div class="d-flex justify-center">
                    <v-icon class="mx-2 d-flex" v-for="item in Powered" :size="item.size" :icon="item.icon"
                        :color="item.color" :title="item.title"></v-icon>
                </div>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup lang="ts">
import CloudflareIcon from '@/components/icons/CloudflareIcon.vue';
import UbuntuIcon from '@/components/icons/UbuntuIcon.vue';

const Powered = [
    {
        title: 'Cloudflare',
        icon: CloudflareIcon,
        size: 40
    },
    {
        title: 'Vuetify',
        icon: '$vuetify',
        size: 35,
        color: "info"
    },
    {
        title: 'Ubuntu',
        icon: UbuntuIcon,
        size: 32
    }
]
</script>