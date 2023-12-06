<script setup lang="ts">

import {ElementPropsType} from "@/components/elements/types";

const props = defineProps<{
  elementProps: ElementPropsType
}>();

</script>

<template>
  <a class="btn btn-status" :class="elementProps.class">{{ elementProps.label }}</a>
</template>

<style scoped lang="scss">

.btn {
  display: inline-block;
  color: rgba(35, 35, 35, 1);
  background-color: #fdfdfdf2;
  box-shadow: 0 6px 30px rgba(0, 0, 0, .08), 0 0 0 .6px rgba(64, 64, 76, .1);
  border-radius: 999em;
  border: none;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 150ms ease,color 150ms ease,transform 150ms ease,box-shadow 150ms ease;
  outline: none;

  &:hover {
    background-color: #e5e5e5f2;
    color: var(--c-black);
  }

  &.btn-large {
    font-size: 24px;
    padding: 1.675rem 4.5rem;
  }

  &.btn-small {
    font-size: 18px;
    padding: 0.9375rem 2.5rem;
  }
}

.btn-status {
  position: relative;
}

</style>