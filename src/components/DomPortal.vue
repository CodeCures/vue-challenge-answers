<script setup lang="ts">
import { ref } from 'vue';
const msg = ref('Hello Wold!');
</script>

<template>
   <Teleport to="body">
    <span>{{ msg }}</span>
   </Teleport>
</template>

