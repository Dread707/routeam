<script setup lang="ts">
import {useRouter} from "vue-router";
const props = defineProps<{
  routeName: string;
}>();
const router = useRouter();
</script>

<template>
  <a class="route-button" @click="router.push({ name: routeName })">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"
         focusable="false" fill="">
      <path
          d="M4 11.75C3.58579 11.75 3.25 11.4142 3.25 11C3.25 10.5858 3.58579 10.25 4 10.25V11.75ZM18.5303 10.4697C18.8232 10.7626 18.8232 11.2374 18.5303 11.5303L13.7574 16.3033C13.4645 16.5962 12.9896 16.5962 12.6967 16.3033C12.4038 16.0104 12.4038 15.5355 12.6967 15.2426L16.9393 11L12.6967 6.75736C12.4038 6.46447 12.4038 5.98959 12.6967 5.6967C12.9896 5.40381 13.4645 5.40381 13.7574 5.6967L18.5303 10.4697ZM4 10.25H18V11.75H4V10.25Z"
          fill="">

      </path>
    </svg>
  </a>
</template>

<style scoped lang="scss">


.route-button {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  transform: rotate(-45deg);
  transition: opacity .2s ease;
  background-color: #e9e9e9e9;
  cursor: pointer;

  svg {
    fill: #505050;
  }

  &.gray {
    background-color: rgba(80, 80, 80);


    svg {
      fill: #ffffff;
    }
  }

  &:hover {
    opacity: .8;
  }

}

</style>