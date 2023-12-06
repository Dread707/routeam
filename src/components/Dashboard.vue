<script setup lang="ts">
import DraggableElement from "@/components/DraggableElement.vue";
import SketcherElement from "@/components/elements/SketcherElement.vue";
import SocialMediaElement from "@/components/elements/SocialMediaElement.vue";
import ButtonElement from "@/components/elements/ButtonElement.vue";
import WorkElement from "@/components/elements/WorkElement.vue";

const draggableElements = [
  { key: 1, component: SketcherElement , elementStyle: { hideBackground: false }, elementProps: {} },
  { key: 2, component: SocialMediaElement , elementStyle: { hideBackground: false }, elementProps: {} },
  {
    key: 3,
    component: ButtonElement,
    elementStyle: {
      hideBackground: true,
      containerStyle: "border-radius: 999px;",
      hoverEffect: false
    },
    elementProps: {
      label: 'Проекты',
      class: 'btn-large',
    }
  },
  {
    key: 4,
    component: ButtonElement,
    elementStyle: {
      hideBackground: true,
      containerStyle: "border-radius: 999px;",
      hoverEffect: false
    },
    elementProps: {
      label: 'О нас',
      class: 'btn-large',
    }
  },
  {
    key: 5,
    component: ButtonElement,
    elementStyle: {
      hideBackground: true,

      containerStyle: "border-radius: 999px;",
      hoverEffect: false
    },
    elementProps: {
      label: 'Карьера',
      class: 'btn-small',
    }
  },
  {
    key: 6,
    component: ButtonElement,
    elementStyle: {
      hideBackground: true,
      containerStyle: "border-radius: 999px;",
      hoverEffect: false
    },
    elementProps: {
      label: 'Контакты',
      class: 'btn-small',
    }
  },
  {key: 7, component: WorkElement},
  // {key: 8, component: ''},
  // {key: 9, component: ''},
  // {key: 10, component: ''},
  // {key: 11, component: ''},
  // {key: 12, component: ''}
]
</script>

<template>
  <DraggableElement
      v-for="(element) in draggableElements"
      :element="{key: element.key, component: element.component}"
      :elementStyle="element.elementStyle"
      :elementProps="element.elementProps"
  />
</template>

<style scoped>

</style>