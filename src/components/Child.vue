<script setup lang="ts">
import { onMounted, inject, onUnmounted, onBeforeUnmount } from "vue"

const timer = inject("timer")
const count = inject("count")

onMounted(() => {
  timer.value = setInterval(() => {
    count.value++
  }, 1000)
})

onBeforeUnmount(() => window.clearInterval(timer.value))

</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>