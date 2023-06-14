<script setup lang="ts">
type ButtonStyleType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
interface Props { type: ButtonStyleType }

withDefaults(defineProps<Props>(), { type: 'default' })
</script>

<template>
    <button>Button</button>
</template>
