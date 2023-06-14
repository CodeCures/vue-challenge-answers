<script setup lang='ts'>
import { useToggle } from '@/composable/toggle';
import { useLocalStorage } from '@/composable/localstorage';

const { state, toggle } = useToggle(false);

const count = useLocalStorage('Counter', 0)

function update() {
  count.value++
}

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>

  <div>
    <h2>{{ count }}</h2>
    <button @click="update">increment</button>
  </div>
</template>

