<template>
  <v-footer height="40" app>
    <a class="social-link" title="Vuetify Official" href="https://vuetifyjs.com/" target="_blank">
      <v-icon icon="$vuetify" size="$vuetify" />
    </a>

    <div class="text-caption text-disabled" style="position: absolute; right: 16px;">
      &copy; 2016-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Vuetify, LLC</span>
      —
      <a class="text-decoration-none on-surface" href="https://vuetifyjs.com/about/licensing/" rel="noopener noreferrer"
        target="_blank">
        MIT License
      </a>
    </div>
  </v-footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
