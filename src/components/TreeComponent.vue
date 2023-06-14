<script setup lang="ts">
interface TreeData {
  key: string
  title: string
  children?: TreeData[]
}
defineProps<{data: TreeData[]}>()

</script>

<template>
  <ul>
    <li v-for="node in data">
        <span>{{ node.title }}</span>
        <TreeComponent v-if="node.children" :data="node.children" />
    </li>
  </ul>
</template>
