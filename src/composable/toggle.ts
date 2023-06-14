import { ref } from "vue";

export function useToggle(defaultState: boolean){
    const state = ref(defaultState);

    const toggle = () =>  state.value = !state.value;

    return {state, toggle}
}