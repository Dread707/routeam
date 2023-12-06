<script setup lang="ts">
import interact from 'interactjs';
import {onMounted} from "vue";
import {ElementPropsType} from "@/components/elements/types";

const props = defineProps<{
  element: {
    key: number,
    component: Object,
  },
  elementStyle: {
    hideBackground?: boolean,
    containerStyle?: string,
    hoverEffect?: boolean,

  },
  elementProps: ElementPropsType
}>()

const generateCoordinates = () => {
  const windowWidth = window.innerWidth; // Ширина активного окна
  const windowHeight = window.innerHeight; // Высота активного окна
  const distance = 100;
  const centerX = windowWidth / 2;
  const centerY = windowHeight / 2;
  const maxX = Math.min(centerX + centerX - distance, windowWidth - distance);
  const maxY = Math.min(centerY + centerY - distance, windowHeight - distance);
  const x = centerX + (Math.random() - 0.5) * (maxX - centerX);
  const y = centerY + (Math.random() - 0.5) * (maxY - centerY);
  return {x, y};
}

const defaultCoordinates = generateCoordinates();

onMounted(() => {
  const target = document.getElementById(`drag-${props.element.key}`);
  target.style.transform = 'translate(' + defaultCoordinates.x + 'px, ' + defaultCoordinates.y + 'px)';
});


const dragMoveListener = (event: any) => {
  let target = event.target
  let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

interact('.draggable')
    .draggable({
      cursorChecker: () => 'grab',
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      autoScroll: false,
      listeners: { move: dragMoveListener }
    })

window['dragMoveListener'] = dragMoveListener;

</script>

<template>
  <div
      :id="`drag-${element.key}`"
      :class="{ 'draggable-bg': !elementStyle?.hideBackground }"
      :data-x="defaultCoordinates.x"
      :data-y="defaultCoordinates.y"
      class="draggable"
  >
    <div class="element-container" :class="{ 'hover-effect': elementStyle?.hoverEffect }" :style="elementStyle?.containerStyle">
      <component :is="element.component" :element-props="elementProps" />
    </div>
  </div>

</template>

<style lang="scss" scoped>

.draggable-bg {
  background: linear-gradient(
          309deg,
          rgba(255, 255, 255, 0.1) 30%,
          rgba(255, 255, 255, 0.4) 90%
  );
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 1px 24px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.draggable {
  touch-action: none;
  user-select: none;
  transform: translate(0px, 0px);
  position: absolute;
  margin: 1rem 0 0 1rem;
}

.element-container .hover-effect {
  border-radius: 20px;
  transition: 200ms;

  &:hover {
    box-shadow: 0 1px 24px 10px rgba(0, 0, 0, 0.1);
  }
}

</style>