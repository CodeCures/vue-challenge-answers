<script setup lang='ts'>

import { h, ref } from "vue"

/**
 * Implement a functional component :
 * 1. Render the list elements (ul/li) with the list data
 * 2. Change the list item text color to red when clicked.
*/
const ListComponent = () => {
    return h('ul', {}, list.map((user, idx) => {
        return h('li', {
            onClick(){
                toggle(idx)
            },
            style: {
                color: idx === activeIndex.value ? 'red' : 'black'
            }
        }, user.name)
    }))
}

const list = [{
    name: "John",
}, {
    name: "Doe",
}, {
    name: "Smith",
}]

const activeIndex = ref(0)

function toggle(index: number) {
    activeIndex.value = index
}

</script>

<template>
    <list-component :list="list" :active-index="activeIndex" @toggle="toggle" />
</template>

