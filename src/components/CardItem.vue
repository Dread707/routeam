<script setup lang="ts">
import interact from 'interactjs';
import {onBeforeMount, onMounted} from "vue";

const props = defineProps<{
  itemKey: number
}>()

const generateCoordinates = () => {
  const windowWidth = window.innerWidth; // Ширина активного окна
  const windowHeight = window.innerHeight; // Высота активного окна
  const distance = 100;
  console.log(windowWidth, windowHeight);
  const centerX = windowWidth / 2;
  const centerY = windowHeight / 2;
  const maxX = Math.min(centerX + centerX - distance, windowWidth - distance);
  const maxY = Math.min(centerY + centerY - distance, windowHeight - distance);
  const x = centerX + (Math.random() - 0.5) * (maxX - centerX);
  const y = centerY + (Math.random() - 0.5) * (maxY - centerY);
  console.log({ x, y });
  return { x, y };
}

const defaultCoordinates = generateCoordinates();

onMounted(() => {
  const target = document.getElementById(`drag-${props.itemKey}`);
  console.log(target.getBoundingClientRect())
  //
  // target.style.top = `${defaultCoordinates.x}px`;
  // target.style.left = `${defaultCoordinates.y}px`;

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
      // enable inertial throwing
      inertia: false,
      // keep the element within the area of it's parent
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      // enable autoScroll
      autoScroll: false,

      listeners: {
        start (event) {
          console.log(event.type, event.target)
        },
        // call this function on every dragmove event
        move: dragMoveListener,

        // call this function on every dragend event
        end (event) {
          let textEl = event.target.querySelector('p')

          textEl && (textEl.textContent =
              'moved a distance of ' +
              (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                  Math.pow(event.pageY - event.y0, 2) | 0))
                  .toFixed(2) + 'px')
        }
      }
    })

// this function is used later in the resizing and gesture demos
window['dragMoveListener'] = dragMoveListener;

</script>

<template>
  <div :id="`drag-${itemKey}`" class="draggable" :data-x="defaultCoordinates.x" :data-y="defaultCoordinates.y">
    <p> You can drag one element </p>
  </div>

</template>

<style scoped>

.draggable {
  width: 40px;
  min-height: 40px;
  background-color: #29e;
  color: white;
  border-radius: 0.75em;
  padding: 4%;
  touch-action: none;
  user-select: none;
  transform: translate(0px, 0px);
  position: absolute;
}

</style>