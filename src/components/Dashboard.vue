<script setup lang="ts">
import DraggableElement from "@/components/DraggableElement.vue";
import SketcherElement from "@/components/elements/SketcherElement.vue";
import SocialMediaElement from "@/components/elements/SocialMediaElement.vue";

const items = [
  {key: 1, component: SketcherElement},
  {key: 2, component: SocialMediaElement},
  {key: 3, component: ''},
  {key: 4, component: ''},
  {key: 5, component: ''},
  // {key: 6, component: ''},
  // {key: 7, component: ''},
  // {key: 8, component: ''},
  // {key: 9, component: ''},
  // {key: 10, component: ''},
  // {key: 11, component: ''},
  // {key: 12, component: ''}
]
</script>

<template>
  <DraggableElement :itemKey="item.key" :item-component="item.component" v-for="(item) in items" />
</template>

<style scoped>

</style>