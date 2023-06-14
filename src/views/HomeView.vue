<script setup lang='ts'>
import { useToggle } from '@/composable/toggle';

const { state, toggle } = useToggle(false);

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>
</template>

