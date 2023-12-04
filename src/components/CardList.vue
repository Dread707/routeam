<script setup lang="ts">

import CardItem from "@/components/CardItem.vue";

const items = [{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}]
</script>

<template>
  <CardItem :itemKey="item.key" v-for="(item) in items" />
</template>

<style scoped>

</style>