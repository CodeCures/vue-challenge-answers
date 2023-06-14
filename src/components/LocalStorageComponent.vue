<script setup lang='ts'>
import { useLocalStorage } from '@/composable/localstorage';


const counter = useLocalStorage('Counter', 0)

const update = () => counter.value++

</script>

<template>
  <p>Counter: {{ counter }}</p>
  <button @click="update">
    Update
  </button>
</template>